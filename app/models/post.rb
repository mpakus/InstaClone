# frozen_string_literal: true

class Post < ApplicationRecord
  include Uniqable
  include Sortable

  uniqable :uid

  belongs_to :user

  has_one_attached :image

  validates :image, presence: true

  scope :with_relations, -> { includes(:user) }
end

# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  content    :text
#  uid        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_posts_on_uid      (uid) UNIQUE
#  index_posts_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
