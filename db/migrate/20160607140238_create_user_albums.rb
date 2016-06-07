class CreateUserAlbums < ActiveRecord::Migration
  def change
    create_table :user_albums do |t|
      t.integer :spins, default: 0
      t.datetime :last_spun
      t.belongs_to :user
      t.belongs_to :album


      t.timestamps null: false
    end
  end
end
