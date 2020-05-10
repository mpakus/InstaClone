# frozen_string_literal: true

class PostsController < ApplicationController
  def index; end

  def show; end

  private

  helper_method def post
    @post ||= Post.find_uniqable!(params[:id])
  end
end
