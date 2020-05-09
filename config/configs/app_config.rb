# frozen_string_literal: true

class AppConfig < ApplicationConfig
  attr_config :sender, :secret, :encoding
end
