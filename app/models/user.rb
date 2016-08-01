class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers=> [ :spotify ]

  store :discogs, accessors: [:oauth_token, :oauth_token_secret], coder: JSON
  store :spotify, accessors: [:oauth_token, :oauth_token_secret], coder: JSON

  has_many :user_albums
  has_many :albums, through: :user_albums


  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
    end
  end

  def last_album
    Album.find(self.user_albums.order(last_spun: :desc).first.album_id)
  end

end
