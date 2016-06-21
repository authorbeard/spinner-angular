class UserAlbumsController < ApplicationController
    before_action :authenticate_user!, except: [:index]
    respond_to :json

    def index
        user_albums = UserAlbum.where(user_id: current_user.id)
        render json: user_albums
    end

    def new
    
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
            album = Album.find(params[:user_album][:id])
            current_user.spin_it(album)
            render json: album
        end
    end

    def delete
    
    end



end
