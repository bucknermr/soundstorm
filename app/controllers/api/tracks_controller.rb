class Api::TracksController < ApplicationController

  def index
    @tracks = Track.where(artist_id: params[:artist_id])
    render :index
  end

  def show
    @track = Track.includes(:artist, comments: [:author]).find_by(id: params[:id])
    if @track
      render :show
    else
      render json: ["Sorry, we can't find this track."], status: 404
    end
  end

  def create
    @track = Track.new(track_params)
    @track.artist_id = current_artist.id
    if @track.save
      render :track
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update_attributes(track_params)
      render :track
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :audio, :image)
  end

end
