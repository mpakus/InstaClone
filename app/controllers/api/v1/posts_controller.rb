# frozen_string_literal: true

class Api::V1::PostsController < Api::V1::ApplicationController
  skip_before_action :authenticate, only: %i[index show]

  def index
    @posts = Post
             .with_relations
    apply_filters!
    @posts = @posts
             .page(params[:page])
             .per(params[:per] || 30)
    render json: PostsSerializer.new(@posts, no_comments: true).present
  end

  def create
    post = current_user.posts.create!(post_params)
    render json: PostSerializer.new(post).present
  end

  def show
    post = Post.includes(comments: [:user]).find_uniqable!(params[:id])
    render json: PostSerializer.new(post).present
  end

  private

  # --- Filter Posts ---

  def apply_filters!
    filter_by_user!
    filter_by_likes_and_comments!
  end

  def filter_by_user!
    @posts = @posts.where(user: filter_user) if filter_user
  end

  def filter_by_likes_and_comments!
    if filter_likes || filter_comments
      @posts = @posts.order(likes_count: filter_likes.to_sym) if filter_likes
      @posts = @posts.order(comments_count: filter_comments.to_sym) if filter_comments
    else
      @posts = @posts.ordered
    end
  end

  # --- Params ---

  def filter_user
    @filter_user ||= User.find_uniqable(params[:user]) if null_param(:user)
  end

  def filter_likes
    @filter_likes ||= null_param(:likesFilter)
  end

  def filter_comments
    @filter_comments ||= null_param(:commentsFilter)
  end

  def null_param(name)
    return if params[name].blank?
    return if params[name] == 'null'

    params[name]
  end

  def post_params
    {
      image:   params[:image],
      content: params[:content]
    }
  end
end
