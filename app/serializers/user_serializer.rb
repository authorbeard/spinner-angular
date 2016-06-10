class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :user_albums, only: [:album_id, :spins, :last_spun]
  has_many :albums
end
