class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.text :namevariations
      t.text :profile
      t.string :releases_url
      t.string :resource_url
      t.string :uri
      t.text :urls
      t.integer :discogs_id

      t.timestamps null: false
    end
  end
end
