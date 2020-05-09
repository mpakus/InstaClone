# frozen_string_literal: true

class User::Tokenize
  def initialize(user)
    @user = user
  end

  def perform
    JWT.encode(payload, AppConfig.secret, AppConfig.encoding)
  end

  private

  attr_reader :user

  def payload
    { user_id: user.id }
  end
end
