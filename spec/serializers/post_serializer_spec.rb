# frozen_string_literal: true

RSpec.describe PostSerializer do
  subject { described_class.new(post).present }

  context 'with real post' do
    let(:post) { create :post }

    it { is_expected.to be_a_kind_of Hash }
    it { expect(subject[:uid]).to eq post.uid }
    it { expect(subject[:content]).to eq post.content }
    it { expect(subject[:image]).not_to be_empty }
    it { expect(subject[:commentsCount]).to eq 0 }
  end

  context 'with null post' do
    let(:post) { nil }

    it { is_expected.to be_a_kind_of Hash }
    it { is_expected.to eq({}) }
  end
end
