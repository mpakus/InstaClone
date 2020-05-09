# frozen_string_literal: true

RSpec.describe 'Api::V1::Profiles', type: :request do
  describe 'GET /api/v1/profiles' do
    let(:user) { create :user }
    let(:request) { get api_v1_profile_path, headers: { "Authorization": auth } }

    before { request }

    context 'with valid token' do
      let(:auth) { "Bearer #{token(user)}" }

      it { expect(response).to have_http_status(:ok) }
      it { expect(json_body['name']).to eq user.name }
      it { expect(json_body['uid']).to eq user.uid }
      it { expect(json_body['email']).to eq user.email }
    end

    context 'with invalid token' do
      let(:auth) { '' }

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
