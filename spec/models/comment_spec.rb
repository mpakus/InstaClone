# frozen_string_literal: true

RSpec.describe Comment, type: :model do
  context 'with relations' do
    it { is_expected.to belong_to :post }
    it { is_expected.to belong_to :user }
  end

  context 'with validation' do
    it { is_expected.to validate_presence_of(:content) }
  end
end
