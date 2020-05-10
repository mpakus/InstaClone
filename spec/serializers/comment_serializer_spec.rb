# frozen_string_literal: true

RSpec.describe CommentSerializer do
  subject { described_class.new(comment).present }

  context 'with real post' do
    let(:comment) { create :comment }
    let(:date_words) do
      ApplicationController.helpers.time_ago_in_words(comment.created_at)
    end

    it { is_expected.to be_a_kind_of Hash }
    it { expect(subject[:uid]).to eq comment.uid }
    it { expect(subject[:content]).to eq comment.content }
    it { expect(subject[:user]).not_to be_empty }
    it { expect(subject[:date]).to eq date_words }
  end

  context 'with null post' do
    let(:comment) { nil }

    it { is_expected.to be_a_kind_of Hash }
    it { is_expected.to eq({}) }
  end
end
