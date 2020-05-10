# frozen_string_literal: true

RSpec.describe Post, type: :model do
  context 'with relations' do
    it { is_expected.to belong_to :user }
  end

  context 'with validation' do
    it { is_expected.to validate_presence_of(:image) }
  end

  context 'with scopes' do
    describe '.ordered' do
      subject { described_class.ordered.to_a }

      let(:post1) { create :post }
      let(:post2) { create :post, created_at: 2.days.ago }
      let(:post3) { create :post, created_at: 1.day.from_now }

      before { [post1, post2, post3] }

      it { is_expected.to eq [post3, post1, post2] }
    end
  end
end
