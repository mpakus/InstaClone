Rails.application.routes.draw do

  # --- DEVISE ---

  devise_for :users,
             path:       '/',
             path_names: {
               sign_in:      'login',
               sign_out:     'logout',
               password:     'remember',
               registration: 'signup'
             }
  devise_scope :user do
    get '/signup' => 'users/registrations#new', as: :signup
    get '/logout' => 'devise/sessions#destroy', as: :logout
    get '/login' => 'devise/sessions#new', as: :login
  end

  # --- WEB ---

  root 'posts#index'
  resources :posts, only: %i[index show]

  # --- API ----

  namespace :api do
    namespace :v1 do
      get 'profile' => 'profile#index', as: :profile

      resources :posts, only: %i[create index show] do
        resources :comments, only: %i[create]
        resources :likes, only: %i[create]
      end
    end
  end
end
