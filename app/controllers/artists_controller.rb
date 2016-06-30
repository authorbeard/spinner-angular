class ArtistsController < ApplicationController
    before_action :authenticate_user!, only: [:edit, :update, :destroy]
    before_action :set_artist, except: [:index, :create]
    respond_to :json

    def index
        render json: Artist.all.includes(:albums=>[:id, :title])
    end

    def show
        render json: @artist
    end

    def create
        render json: Artist.create(artist_params)
    end

    def update
        render json: @artist.update(artist_params)
    end

    def destroy
        @artist.destroy

    end

    private 

      def set_artist
        @artist=Artist.find(params[:id])
      end

      def artist_params
        params.require(:artist).permit(:id, :name, :albums=>[], :songs=>[])
      end

end
