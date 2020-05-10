# frozen_string_literal: true

RSpec.describe 'Api::V1::Comments', type: :request do
  let(:user) { create :user }
  let(:post_img) { create :post }

  # --- CREATE COMMENT FOR POST ---

  describe 'POST /api/v1/posts/:post_id/comments' do
    let(:request) do
      post api_v1_post_comments_path(post_id: post_img.uid),
           params: params,
           headers: { "Authorization": auth }
    end

    before { request }

    context 'with valid token and content' do
      let(:auth) { "Bearer #{token(user)}" }
      let(:params) do
        {
          content: 'TEXT'
        }
      end

      it { expect(response).to have_http_status(:ok) }
      it { expect(json_body['msg']).to eq 'ok' }
    end

    context 'with valid token but empty content' do
      let(:auth) { "Bearer #{token(user)}" }
      let(:params) do
        {
          content: nil
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
