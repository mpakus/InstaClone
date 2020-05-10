# frozen_string_literal: true

class CommentSerializer
  def initialize(comment)
    @comment = comment
  end

  def present
    return {} if comment.blank?

    prepare_comment
  end

  private

  attr_reader :comment

  def prepare_comment
    {
      uid:      comment.uid,
      content:  comment.content,
      user:     UserSerializer.new(comment.user).present,
      date:     ApplicationController.helpers.time_ago_in_words(comment.created_at)
    }
  end
end
