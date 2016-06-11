class AlbumsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_album, except: [:index, :new, :create]

  def index
    @albums||=Album.order(:artist_id)
  end

  def show
    respond_to do |format|
      format.json { render json: @album}
    end
  end

  def new
  end

  def create

    respond_to do |format|
      format.json {
        
          alb_params=JSON.parse(params["album"])
          album=Album.find_by(title: alb_params["title"])
          if album 
    
            album.update(alb_params)
          else
            album=Album.create(alb_params)
            album.artist=Artist.find_or_create_by(name: album.group)
          end

          current_user.albums << album unless current_user.albums.include?(album)
          album.save
          @album=album
  
          render json: @album
      } 
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

    current_user.user_albums.find_by(album_id: @album.id).delete
    redirect_to albums_path, :notice=>"Okay, you ain't got that one anymore."
  end

  def add
    current_user.albums << @album
    # redirect_to :back, :notice=>"Awesome choice! <a href='#{album_path(@album)}'>Spin it now</a>"
  end

  def spin 
  byebug  
    current_user.spin_it(@album)
    @album=UserAlbum.where(user_id: current_user.id).find_by(album_id: (@album.id))
    render json: @album
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
    params.require(:album).permit(:title, :artist_name, :catalog_no, :group, :rel_date, :rel_id, :acquired, :search_q, :alb_url, :artist_id, :cover, :song_ids=>[], :artist_attributes=>[:name], :songs_attributes=>[:title, :song_ids=>[]])
  end

end
