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
        user_albums = UserAlbum.where(user_id: current_user.id)
        render json: user_albums
    end

    def edit
      
    end

    def update
      byebug
      ua = current_user.user_albums.find(params[:id]).increment(:spins, by=1).save
    end

    def delete
    
    end



end
