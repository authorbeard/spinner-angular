Rails.application.routes.draw do

    root 'application#angular'

    devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

    namespace :api, defaults: {format: :json } do
      namespace :v1 do
        resources :users do
          resources :user_albums, only: [:index, :show, :create, :update, :destroy]
        end
      end
    end

    get "discogs/auth", to: "discogs#start_req", as: "authorize_discogs"
    get "/callback", to: "discogs#callback", as: "discogs_callback"
    post "/discogs/search", to: "discogs#search", as: "discogs_search"

end
