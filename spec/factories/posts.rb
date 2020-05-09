# frozen_string_literal: true

FactoryBot.define do
  factory :post do
    user
    content { Faker::Lorem.sentence(3) }
  end
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
