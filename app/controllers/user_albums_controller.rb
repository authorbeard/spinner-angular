class UserAlbumsController < ApplicationController
before_action :authenticate_user!, except: [:index]


    def index
    end

    def new
      byebug
    end

    def create
    end

    def show
      byebug
        user_albums = UserAlbum.where(user_id: current_user.id)
        render json: user_albums
    end

    def edit
      
    end

    def update
        album=UserAlbum.where(user_id: current_user.id).find_by(album_id: params[:id])
        current_user.spin_it(album)
        render json: album

    end

    def delete
      byebug
    end



end
