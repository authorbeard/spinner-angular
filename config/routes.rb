Rails.application.routes.draw do

    root 'application#angular'

    devise_for :users

    namespace :api, defaults: {format: :json } do
      namespace :v1 do
        resources :users do
          resources :user_albums, only: [:index, :show, :create, :update, :destroy]
        end
      end
    end

end
