# frozen_string_literal: true

module Sortable
  extend ActiveSupport::Concern

  included do
    scope :ordered, -> { order(created_at: :desc) }
    scope :reordered, -> { order(created_at: :asc) }
  end
end
