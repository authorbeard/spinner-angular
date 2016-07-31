class ChangeUserDiscogsColumnType < ActiveRecord::Migration
  def change 
    change_column :users, :discogs, :text
  end

end
