class Api::SessionsController < ApplicationController
  def create
    @artist = Artist.find_by_credentials(
      params[:artist][:email],
      params[:artist][:password]
    )

    if @artist
      login!(@artist)
      render 'api/artists/artist'
    else
      render json: 'Invalid email or password', status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/artists/artist'
    else
      render json: 'Can\'t logout when not logged in', status: 422
    end
  end
end
