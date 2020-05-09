# frozen_string_literal: true

class Api::V1::ProfileController < Api::V1::ApplicationController
  def index
    render json: UserSerializer.new(current_user).present
  end
end
