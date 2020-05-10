# frozen_string_literal: true

class Posts::Like
  def initialize(post, user)
    @post = post
    @user = user
  end

  def perform
    like = post.likes.where(user: user).take

    # toggle Like/UnLike
    if like
      like.destroy
    else
      post.likes.create(user: user)
    end
  end

  private

  attr_reader :post, :user
end
