# frozen_string_literal: true

class Post < ApplicationRecord
  include Uniqable
  include Sortable

  uniqable :uid

  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, class_name: 'Post::Like', dependent: :destroy

  has_one_attached :image

  validates :image, presence: true

  scope :with_relations, -> { includes(:user) }
end

# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  comments_count :integer          default(0)
#  content        :text
#  likes_count    :integer          default(0)
#  uid            :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :bigint           not null
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
