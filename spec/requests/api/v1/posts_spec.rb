# frozen_string_literal: true

RSpec.describe 'Api::V1::Posts', type: :request do
  let(:user) { create :user }
  let(:post_img) { create :post }

  # --- GET POST ---

  describe 'GET /api/v1/posts/:uid' do
    let(:request) { get api_v1_post_path(post_img.uid) }

    before { post_img && request }

    context 'with default params' do
      it { expect(response).to have_http_status(:ok) }
      it { expect(json_body['uid']).to eq post_img.uid }
      it { expect(json_body['content']).to eq post_img.content }
      it { expect(json_body['user']).not_to be_empty }
    end
  end

  # --- GET POSTS ---

  describe 'GET /api/v1/posts' do
    let(:request) { get api_v1_posts_path, params: params }

    describe 'for all posts' do
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

    describe 'for specific user' do
      let(:user1) { create :user }
      let(:user2) { create :user }
      let(:post1_user1) { create :post, user: user1 }
      let(:post2_user1) { create :post, user: user1 }
      let(:post1_user2) { create :post, user: user2 }

      before do
        _ = [post1_user1, post2_user1, post1_user2]
        request
      end

      context 'with user1' do
        let(:params) do
          {
            user: user1.uid
          }
        end

        it { expect(response).to have_http_status(:ok) }
        it { expect(json_body.count).to eq 2 }
        it { expect(json_body.collect { |p| p['uid'] }).to eq [post2_user1.uid, post1_user1.uid] }
      end

      context 'with user2' do
        let(:params) do
          {
            user: user2.uid
          }
        end

        it { expect(response).to have_http_status(:ok) }
        it { expect(json_body.count).to eq 1 }
        it { expect(json_body.collect { |p| p['uid'] }).to eq [post1_user2.uid] }
      end
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
