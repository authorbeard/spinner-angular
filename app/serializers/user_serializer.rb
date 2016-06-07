class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :user_albums
  has_many :albums
end
