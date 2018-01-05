class Api::TracksController < ApplicationController

  def index
    @tracks = Track.includes(:artist)
      .order(play_count: :desc)
      .limit(12)
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

  def play
    @track = Track.find(params[:id])
    @track.play_count += 1
    @track.save!
    render :track
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy!
    render :track
  end

  def search
    p params
    @tracks = Track.search(search_params[:term])
    render :index
  end

  private

  def track_params
    params.require(:track).permit(:title, :description, :audio, :image)
  end

  def search_params
    params.require(:search).permit(:term)
  end

end
