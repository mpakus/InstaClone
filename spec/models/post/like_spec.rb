# frozen_string_literal: true

RSpec.describe Post::Like, type: :model do
  context 'with relations' do
    it { is_expected.to belong_to :user }
    it { is_expected.to belong_to :post }
  end
end
