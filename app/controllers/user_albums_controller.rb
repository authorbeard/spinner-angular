class UserAlbumsController < ApplicationController
before_action :authenticate_user!, except: [:index]


    def index
      if params[:id] = current_user.id
          user_albums = UserAlbum
          render json: user_albums
        end
    end

    def new
      byebug
    end

    def create
    end

    def show
        user_albums = UserAlbum.where(user_id: current_user.id)
        render json: user_albums
    end

    def edit
      
    end

    def update
        if params[:id] = current_user.id
        # byebug
            album = Album.find(params[:user_album][:album_id])
            current_user.spin_it(album)
            render json: album
        end
    end

    def delete
      byebug
    end



end
