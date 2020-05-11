# frozen_string_literal: true

class PostsSerializer
  def initialize(posts, no_comments = false)
    @posts = posts
    @no_comments = no_comments
  end

  def present
    return {} unless posts.any?

    posts
      .collect { |post| PostSerializer.new(post, no_comments).present }
  end

  private

  attr_reader :posts, :no_comments
end
