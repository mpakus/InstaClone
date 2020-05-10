# frozen_string_literal: true

class CommentsSerializer
  def initialize(comments)
    @comments = comments
  end

  def present
    return [] unless comments.any?

    comments
      .collect { |comment| CommentSerializer.new(comment).present }
  end

  private

  attr_reader :comments
end
