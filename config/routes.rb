Rails.application.routes.draw do
  devise_for :users,
             path: '/',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               password: 'remember',
               registration: 'signup'
             }
  devise_scope :user do
    get '/signup' => 'user/registrations#new', as: :signup
    get '/logout' => 'devise/sessions#destroy', as: :logout
    get '/login' => 'devise/sessions#new', as: :login
  end

  root 'home#index'

  namespace :api do
    namespace :v1 do
      get 'profile' => 'profile#index', as: :profile
      resources :posts, only: %i[create index]
    end
  end
end
