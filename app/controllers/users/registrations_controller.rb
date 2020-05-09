# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  def create
    super { sign_in(resource, scope: :user) }
  end
end
