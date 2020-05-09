# frozen_string_literal: true

RSpec.describe UserSerializer do
  subject { described_class.new(user).present }

  context 'with real user' do
    let(:user) { create :user }

    it { is_expected.to be_a_kind_of Hash }
    it { expect(subject[:uid]).to eq user.uid }
    it { expect(subject[:email]).to eq user.email }
    it { expect(subject[:name]).to eq user.name }
    it { expect(subject[:avatar]).to include 'picsum' }
  end

  context 'with null user' do
    let(:user) { nil }

    it { is_expected.to be_a_kind_of Hash }
    it { is_expected.to eq({}) }
  end
end
