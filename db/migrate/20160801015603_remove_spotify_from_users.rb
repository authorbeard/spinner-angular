class RemoveSpotifyFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :spotify
  end
end
