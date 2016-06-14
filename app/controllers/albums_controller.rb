class AlbumsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_album, except: [:index, :new, :create]

  respond_to :json

  def index
    @albums||=Album.order(:artist_id)
  end

  def show
    if current_user.albums.include?(@album)
    # byebug
        user_album = UserAlbum.where({album_id: params[:id], user_id: current_user.id})
        render json: user_album
    else
        render json: @album
    end
  end

  def new
  end

  def create
       # byebug 
       # album=Album.new(album_params)

       if Album.find_by(title: album_params['title'])
        byebug
          album=Album.update(album_params)
          render json: album
      else
        # byebug
          album=Album.create(album_params)
          render json: album
        # byebug

      end
          # album=Album.find_by(title: alb_params["title"])
          # if album 
    
          #   album.update(alb_params)
          # else
          #   album=Album.create(alb_params)
          #   album.artist=Artist.find_or_create_by(name: album.group)
          # end

          # current_user.albums << album unless current_user.albums.include?(album)
          # album.save
          # @album=album
  
          # render json: @album

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

  # def spin 
  # byebug  
  #   current_user.spin_it(@album)
  #   @album=UserAlbum.where(user_id: current_user.id).find_by(album_id: (@album.id))
  #   render json: @album
  # end

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
