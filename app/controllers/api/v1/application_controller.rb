# frozen_string_literal: true

class Api::V1::ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :authenticate

  layout false

  private

  attr_reader :token

  def authenticate
    authenticate_or_request_with_http_token do |token, _options|
      @token = User::Untokenize.new(token).perform
      current_user
    end
  end

  def current_user
    @current_user ||= User.find_by(id: token.user_id)
  end
end
