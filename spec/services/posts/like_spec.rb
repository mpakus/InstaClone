# frozen_string_literal: true

RSpec.describe Posts::Like do
  let(:post) { create :post }
  let(:user) { create :user }

  let(:like) { described_class.new(post, user) }

  context 'with 1st like' do
    before do
      like.perform
      post.reload
    end

    it { expect(post.likes_count).to eq 1 }
    it { expect(post.likes.count).to eq 1 }
  end

  context 'with like and unlike' do
    before do
      like.perform
      like.perform
      post.reload
    end

    it { expect(post.likes_count).to eq 0 }
    it { expect(post.likes.count).to eq 0 }
  end
end
