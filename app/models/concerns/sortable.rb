# frozen_string_literal: true

module Sortable
  extend ActiveSupport::Concern

  included do
    scope :ordered, -> { order(created_at: :desc) }
  end
end
