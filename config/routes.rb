Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :artists, only: [:index, :show, :create, :update, :destroy] do
      resources :tracks, only: [:index]
    end
    resource :session, only: [:create, :destroy]

    resources :tracks, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:create]
    end

    post 'tracks/search', to: 'tracks#search'

    resources :comments, only: [:destroy]
  end

  match 'api/tracks/:id/play',
    to: 'api/tracks#play',
    via: [:patch],
    defaults: { format: :json }
end
