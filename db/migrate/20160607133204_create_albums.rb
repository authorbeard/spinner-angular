class CreateAlbums < ActiveRecord::Migration
  def change
      create_table "albums", force: :cascade do |t|
        t.string   "title"
        t.string   "catalog_no"
        t.string   "group"
        t.integer  "rel_date"
        t.integer  "rel_id"
        t.date     "acquired"
        t.string   "search_q"
        t.string   "alb_url"
        t.integer  "artist_id"
        t.datetime "created_at",         null: false
        t.datetime "updated_at",         null: false
        t.string   "cover_file_name"
        t.string   "cover_content_type"
        t.integer  "cover_file_size"
        t.datetime "cover_updated_at"
    end
  end
end
