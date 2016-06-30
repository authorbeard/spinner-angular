class SongsController < ApplicationController

  before_action :authenticate_user!, only: [:edit, :update, :destroy]
  respond_to :json

  def index
    @songs=Song.all.includes(:artist=>[:id, :name])
  end


  def show
    render json: Song.find(params[:id])
  end

  def create
    song=Song.create(song_params)
    render json: song
  end

  def update
    render json: Song.update(song_params)
  end

  def destroy
    Song.find(params[:id]).destroy
  end

  private

    def song_params
      params.require(:song).permit(:id, :title, :artist=>[], :album=>[])
    end




end


