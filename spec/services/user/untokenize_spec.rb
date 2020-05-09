# frozen_string_literal: true

RSpec.describe User::Untokenize do
  let(:user) { create :user }
  let(:token) { User::Tokenize.new(user).perform }
  let(:decoded) { described_class.new(token).perform }

  it { expect(decoded['user_id']).to eq user.id }
  it { expect(decoded.user_id).to eq user.id }
end
