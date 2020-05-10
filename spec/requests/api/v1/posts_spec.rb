# frozen_string_literal: true

RSpec.describe 'Api::V1::Posts', type: :request do
  describe 'POST /api/v1/posts' do
    let(:user) { create :user }
    let(:request) { post api_v1_posts_path, params: params, headers: { "Authorization": auth } }

    before { request }

    context 'with valid token and file' do
      let(:auth) { "Bearer #{token(user)}" }
      let(:params) do
        {
          content: 'TEXT',
          image: Rack::Test::UploadedFile.new(Rails.root.join('spec/fixtures/vader.jpg'), 'image/jpg')
        }
      end

      it { expect(response).to have_http_status(:ok) }
      it { expect(json_body['uid']).not_to be_empty }
      it { expect(json_body['image']).not_to be_empty }
      it { expect(json_body['user']).not_to be_empty }
      it { expect(json_body['content']).to eq 'TEXT' }
    end

    context 'with valid token but empty file' do
      let(:auth) { "Bearer #{token(user)}" }
      let(:params) do
        {
          content: 'TEXT',
          image: nil
        }
      end

      it { expect(response).to have_http_status(:bad_request) }
      it { expect(json_body['error']).not_to be_empty }
    end

    context 'with invalid token' do
      let(:auth) { '' }
      let(:params) { nil }

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
