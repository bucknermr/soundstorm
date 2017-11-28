class Api::ArtistsController < ApplicationController
  def index
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    if @artist
      render :show
    else
      render json: ['Can\'t find that artist'], status: 404
    end
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      login!(@artist)
      render 'api/sessions/show'
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def update
    @artist = current_artist
    if @artist.update_attributes(update_params)
      render 'api/sessions/show'
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def artist_params
    params.require(:artist).permit(:email, :password, :name)
  end

  def update_params
    params.fetch(:artist).permit(:name, :bio, :image)
  end
end
