class Song < ActiveRecord::Base

  belongs_to :artist
  belongs_to :album
  has_many :fans, through: :albums

  validates :title, uniqueness: { scope: :album_id,
  message: "You got that one already." }
  before_create :prep_title

  def prep_title
    title.capitalize!
  end

  def song_title_scraper
    agent=Mechanize.new
    search=agent.get("http://www.discogs.com").form(id: "site_search")
    search.q=self.search_q
    results=agent.submit(search)
    self.alb_url=results.search("div.card a")[0]["href"]
    alb_pg=agent.get(self.alb_url)
    t_names=alb_pg.search("tr.track").search("span.tracklist_track_title").collect{|t| t.text}
    t_names.each {|t| self.songs << Song.find_or_create_by(title: t, artist_id: self.artist_id)}
    self.save 
  end
end
