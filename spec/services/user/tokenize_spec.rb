# frozen_string_literal: true

RSpec.describe User::Tokenize do
  let(:user) { create :user }
  let(:encoded) { described_class.new(user).perform }
  let(:decoded) { JWT.decode(encoded, AppConfig.secret, true, { algorithm: AppConfig.encoding })[0] }

  it { expect(decoded['user_id']).to eq user.id }
end
