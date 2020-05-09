# frozen_string_literal: true

class User::Untokenize
  def initialize(token)
    @token = token
  end

  def perform
    OpenStruct.new(decode)
  end

  private

  attr_reader :token

  def decode
    JWT
      .decode(token, AppConfig.secret, true, { algorithm: AppConfig.encoding })
      .first
  end
end
