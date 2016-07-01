module Api
  module V1
    class UserAlbumsController < ApplicationController
        before_action :authenticate_user!, except: [:index]
        respond_to :json

        def index
          render json: current_user.user_albums.includes(:album => [:artist, :songs])
        end

        def create
          current_user.albums << Album.find_or_create_by(params[:album])
        end

        def show
          render json: current_user.user_albums.includes(:album=>[:artist, :songs]).find(params[:id])
        end

        def update
          ua = current_user.user_albums.find(params[:id])
          if ua.update(ua_params)
            render json: ua
          end
        end

        def delete
          current_user.user_albums.delete(params[:id])
          render json: current_user.user_albums
        end

        private
          def ua_params
            params.require(:user_album).permit(:id, :spins, :album=>[])
          end



    end
  end
end
