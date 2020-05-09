# frozen_string_literal: true

RSpec.describe Post, type: :model do
  context 'with relations' do
    it { is_expected.to belong_to :user }
  end
end
