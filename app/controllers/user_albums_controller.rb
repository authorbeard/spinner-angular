class UserAlbumsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    respond_to :json

    def index
      render json: current_user.user_albums.includes(:album => [:artist, :songs])
    end

    def new
    end

    def create
    end

    def show
      # user_albums = UserAlbum.where(user_id: current_user.id)
      # render json: user_albums
    end

    def edit
    end

    def update
      # byebug
      ua = current_user.user_albums.find(params[:id])
      if ua.update(ua_params)
        render json: ua
      end
    end

    def delete
      current_user.user_albums.find_by(album_id: @album.id).delete
      redirect_to albums_path, :notice=>"Okay, you ain't got that one anymore."
    end

    private
      def ua_params
        params.require(:user_album).permit(:id, :spins)
      end



end
