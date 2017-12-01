class FollowsController < ApplicationController
  def create
    @follow = Follow.new(follower_id: current_artist.id, followee_id: params[:followee_id])
    if @follow.save
      @artist = current_artist
      # render json: 'api/'
    end
  end

  def destroy
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
