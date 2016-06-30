class AlbumsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_album, except: [:index, :create, :update]

  respond_to :json

  def index
    @albums||=Album.order(:artist_id)
  end

  def show
    render json: Album.find(params[:id])
  end

  def create
    render json: Album.create(album_params)

  end

  def update
    render json: @album.update(album_params)
  end

  # def import_songs
  #   @album.import_songs
  #   redirect_to album_path(@album)
  # end

  private

  def set_album
    @album=Album.find_by(id: params[:id])
  end

  def album_params
    params.require(:album).permit(:title, :catalog_no, :group, :rel_date, :rel_id, :acquired, :search_q, :alb_url, :artist_id, :cover, :song_ids=>[], :artist_attributes=>:name, :songs_attributes=>[:titles, :song_ids=>[]])
  end

end
