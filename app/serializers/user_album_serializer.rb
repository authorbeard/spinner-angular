class UserAlbumSerializer < ActiveModel::Serializer
  attributes :id, :spins, :last_spun, :album_id 
  has_one :album, only: [:id, :title, :artist, :cover]
end
