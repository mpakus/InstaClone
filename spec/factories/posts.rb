# frozen_string_literal: true

FactoryBot.define do
  factory :post do
    user
    content { Faker::Lorem.sentence(word_count: 3) }
    image { Rack::Test::UploadedFile.new(Rails.root.join('spec/fixtures/vader.jpg'), 'image/jpg') }
  end
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
