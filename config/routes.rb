Rails.application.routes.draw do

    root 'application#angular'

    devise_for :users
    # as :user do
    #   get "/signin" => "devise/sessions#new"
    #   get "/signout" => "devise/sessions#destroy"
    # end
    
    # resources :users, only: [:show, :edit, :update, :destroy]
    
    # resources :users do
    #     resources :user_albums
    # end

    # resources :albums, only: [:index, :show, :create, :update, :destroy]

    # resources :songs, only: [:index, :show, :create, :update, :destroy]

    # resources :user_albums, only: [:index]

    namespace :api, defaults: {format: :json } do
      namespace :v1 do
        resources :users do
          resources :user_albums, only: [:index, :create, :update, :destroy]
        end
      end
    end



    


    


end
