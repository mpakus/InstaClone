# frozen_string_literal: true

class PostsSerializer
  def initialize(posts)
    @posts = posts
  end

  def present
    return {} unless posts.any?

    posts
      .collect { |post| PostSerializer.new(post).present }
  end

  private

  attr_reader :posts
end
