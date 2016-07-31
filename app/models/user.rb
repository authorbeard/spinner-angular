class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  store :discogs, accessors: [:oauth_token, :oauth_token_secret], coder: JSON
  store :spotify, accessors: [:oauth_token, :oauth_token_secret], coder: JSON

  has_many :user_albums
  has_many :albums, through: :user_albums


  def last_album
    Album.find(self.user_albums.order(last_spun: :desc).first.album_id)
  end

end
