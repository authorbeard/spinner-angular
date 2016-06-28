class AlbumsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_album, except: [:index, :new, :create]

  respond_to :json

  def index
    @albums||=Album.order(:artist_id)
  end

  def show
    render json: @album
  end

  def new
  end

  def create
      if album = Album.find_by(title: album_params['title'])
          album.update(album_params)
          render json: album
      else
          album=Album.create(album_params)
          render json: album
      end
  end

  def edit
    redirect_to :back, :alert=>"You gotta be logged in & have that album to edit it" unless current_user.albums.include?(@album)
  end

  def update
    @album.update(album_params)
    redirect_to album_path(@album)
  end

  def destroy
    
  end

  def add
    current_user.albums << @album
    # redirect_to :back, :notice=>"Awesome choice! <a href='#{album_path(@album)}'>Spin it now</a>"
  end


  def import_songs
    @album.import_songs
    redirect_to album_path(@album)
  end

  private

  def set_album
    @album=Album.find_by(id: params[:id])
  end

  def album_params
    params.require(:album).permit(:title, :catalog_no, :group, :rel_date, :rel_id, :acquired, :search_q, :alb_url, :artist_id, :cover, :song_ids=>[], :artist_attributes=>:name, :songs_attributes=>[:titles, :song_ids=>[]])
  end

end
