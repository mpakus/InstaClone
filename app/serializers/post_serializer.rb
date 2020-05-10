# frozen_string_literal: true

class PostSerializer
  def initialize(post)
    @post = post
  end

  def present
    return {} if post.blank?

    prepare_post
  end

  private

  attr_reader :post

  def prepare_post
    {
      uid:           post.uid,
      content:       post.content,
      image:         post.image.attached? ? post_image : default_image,
      user:          UserSerializer.new(post.user).present,
      comments:      CommentsSerializer.new(post.comments.reordered).present,
      commentsCount: post.comments_count
    }
  end

  def url_for(url)
    Rails.application.routes.url_helpers.url_for(url)
  end

  def post_image
    url_for post.image.variant(
      resize: '960x'
    )
  end

  def default_image
    'https://picsum.photos/960x'
  end
end
