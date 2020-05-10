# frozen_string_literal: true

class Api::V1::LikesController < Api::V1::ApplicationController
  def create
    Posts::Like.new(post, current_user).perform
    post.reload
    render json: { count: post.post_likes_count }
  end

  private

  def post
    @post ||= Post.find_uniqable!(params[:post_id])
  end
end
