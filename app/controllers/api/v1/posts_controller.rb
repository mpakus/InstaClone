# frozen_string_literal: true

class Api::V1::PostsController < Api::V1::ApplicationController
  def create
    post = current_user.posts.create!(post_params)
    render json: PostSerializer.new(post).present
  end

  private

  def post_params
    {
      image:   params[:image],
      content: params[:content]
    }
  end
end
