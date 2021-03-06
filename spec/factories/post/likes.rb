# frozen_string_literal: true

FactoryBot.define do
  factory :post_like, class: 'Post::Like' do
    user
    post
  end
end

# == Schema Information
#
# Table name: post_likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_post_likes_on_post_id  (post_id)
#  index_post_likes_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (post_id => posts.id)
#  fk_rails_...  (user_id => users.id)
#
