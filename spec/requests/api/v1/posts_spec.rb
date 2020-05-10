# frozen_string_literal: true

RSpec.describe 'Api::V1::Posts', type: :request do
  let(:user) { create :user }

  # --- GET POSTS ---

  describe 'GET /api/v1/posts' do
    let(:request) { get api_v1_posts_path, params: params }

    before do
      create_list :post, 60
      request
    end

    context 'with default params' do
      let(:params) { nil }

      it { expect(response).to have_http_status(:ok) }
      it { expect(json_body.count).to eq 30 }
      it { expect(json_body.collect { |p| p['uid'] }).to eq Post.ordered.limit(30).pluck(:uid) }
    end

    context 'with page: 2 and 5 records per page' do
      let(:params) do
        {
          page: 2,
          per: 5
        }
      end

      it { expect(response).to have_http_status(:ok) }
      it { expect(json_body.count).to eq 5 }
      it { expect(json_body.collect { |p| p['uid'] }).to eq Post.ordered.offset(5).limit(5).pluck(:uid) }
    end
  end

  # --- CREATE POST ---

  describe 'POST /api/v1/posts' do
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
