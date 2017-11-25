class Api::TracksController < ApplicationController

  def index
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render :show
    end
  end

  def create
    @track = Track.new(track_params)
    @track.artist_id = current_artist.id
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :audio)
  end

end
