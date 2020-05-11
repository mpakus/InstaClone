# frozen_string_literal: true

class PostSerializer
  def initialize(post, no_comments = false)
    @post = post
    @no_comments = no_comments
  end

  def present
    return {} if post.blank?

    prepare_post
  end

  private

  attr_reader :post, :no_comments

  def prepare_post
    {
      uid:           post.uid,
      content:       post.content,
      image:         post.image.attached? ? post_image : default_image,
      user:          UserSerializer.new(post.user).present,
      comments:      no_comments ? [] : CommentsSerializer.new(post.comments.with_relations.reordered).present,
      commentsCount: post.comments_count,
      likesCount:    post.likes_count
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
