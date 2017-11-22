class Api::SessionsController < ApplicationController
  def create
    @artist = Artist.find_by_credentials(
      params[:artist][:email],
      params[:artist][:password]
    )

    if @artist
      login!(@artist)
      render :show
    else
      render json: 'Invalid email or password', status: 422
    end
  end

  def destroy
    @artist = current_artist
    if logged_in?
      logout!
      render :show
    else
      render json: 'Can\'t logout when not logged in', status: 422
    end
  end
end
