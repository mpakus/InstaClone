# frozen_string_literal: true

RSpec.describe Post, type: :model do
  context 'with relations' do
    it { is_expected.to belong_to :user }
  end

  context 'with validation' do
    it { is_expected.to validate_presence_of(:image) }
  end
end
