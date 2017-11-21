class Api::ArtistsController < ApplicationController
  def index
  end

  def show
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      login!(@artist)
      render :artist
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def artist_params
    params.require(:artist).permit(:email, :password, :name)
  end

  def optional_params
    # params.fetch(:artist).permit(:image_url)
  end
end
