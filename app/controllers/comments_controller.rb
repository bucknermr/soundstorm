class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_artist.id
    @comment.track_id = params[:track_id]

    if @comment.save
      # TODO: render comment json
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
