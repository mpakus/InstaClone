# frozen_string_literal: true

RSpec.describe User, type: :model do
  context 'with relations' do
    it { is_expected.to have_many :posts }
  end
end
