# frozen_string_literal: true

class Api::V1::ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :authenticate

  rescue_from ActiveRecord::RecordInvalid, with: :error_invalid_record

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

  def error_invalid_record(exception)
    render json: { error: exception.full_message }, status: :bad_request
  end
end
