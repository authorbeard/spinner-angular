class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  store :discogs, accessors: [:oauth_token, :oauth_token_secret], coder: JSON

  has_many :user_albums
  has_many :albums, through: :user_albums


  def last_album
    Album.find(self.user_albums.order(last_spun: :desc).first.album_id)
  end

  # def spin(album)
  #   user_albums.find_by(album_id: album.id).increment(:spins, by=1).save
  # end

  def reset_spins
    user_albums.take(5).each{|a|
      a.spins=0
      a.last_spun=nil
      a.save
    }
  end

end
