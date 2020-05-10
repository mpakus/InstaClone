# frozen_string_literal: true

RSpec.describe Post, type: :model do
  context 'with relations' do
    it { is_expected.to belong_to :user }
    it { is_expected.to have_many :comments }
    it { is_expected.to have_many :likes }
  end

  context 'with validation' do
    it { is_expected.to validate_presence_of(:image) }
  end

  context 'with scopes' do
    let(:post1) { create :post }
    let(:post2) { create :post, created_at: 2.days.ago }
    let(:post3) { create :post, created_at: 1.day.from_now }

    before { [post1, post2, post3] }

    describe '.ordered' do
      subject { described_class.ordered.to_a }

      it { is_expected.to eq [post3, post1, post2] }
    end

    describe '.reordered' do
      subject { described_class.reordered.to_a }

      it { is_expected.to eq [post2, post1, post3] }
    end
  end
end
