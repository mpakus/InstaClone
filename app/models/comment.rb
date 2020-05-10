# frozen_string_literal: true

class Comment < ApplicationRecord
  include Uniqable
  include Sortable

  belongs_to :post, counter_cache: true
  belongs_to :user

  uniqable :uid

  validates :content, presence: true
end

# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  content    :text
#  uid        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_comments_on_post_id  (post_id)
#  index_comments_on_uid      (uid) UNIQUE
#  index_comments_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (post_id => posts.id)
#  fk_rails_...  (user_id => users.id)
#
