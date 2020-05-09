# frozen_string_literal: true

module Requestable
  def token(user)
    User::Tokenize.new(user).perform
  end

  def json_body
    JSON.parse(response.body)
  end
end
