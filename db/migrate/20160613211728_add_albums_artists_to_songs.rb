class AddAlbumsArtistsToSongs < ActiveRecord::Migration
  def change
    add_reference :songs, :album
    add_reference :songs, :artist
  end
end
