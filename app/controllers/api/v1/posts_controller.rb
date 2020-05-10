# frozen_string_literal: true

class Api::V1::PostsController < Api::V1::ApplicationController
  skip_before_action :authenticate, only: [:index]

  def index
    posts = Post
            .ordered
            .with_relations
            .page(params[:page])
            .per(params[:per] || 30)
    render json: PostsSerializer.new(posts).present
  end

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
