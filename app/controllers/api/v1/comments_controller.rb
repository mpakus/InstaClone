# frozen_string_literal: true

class Api::V1::CommentsController < Api::V1::ApplicationController
  def create
    post.comments.create!(comment_params)
    render json: { msg: :ok }
  end

  private

  def post
    @post ||= Post.find_uniqable!(params[:post_id])
  end

  def comment_params
    {
      user:    current_user,
      content: params[:content]
    }
  end
end
