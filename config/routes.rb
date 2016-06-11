Rails.application.routes.draw do

    root 'application#angular'

    devise_for :users
    as :user do
      get "/signin" => "devise/sessions#new"
      get "/signout" => "devise/sessions#destroy"
    end
    
    resources :users, only: [:show, :edit, :update, :destroy]
    post "users/:id/albums/:id/remove", to: "users#remove_album", as: "remove_album"
    get "users/:id/collection", to: "users#collection", as: "collection"


    resources :albums
      post '/albums/:id/spin', to: 'albums#spin', as: "spin"
      get '/albums/:id/import_songs', to: 'albums#import_songs', as: 'import_songs'
      post '/albums/:id/add', to: 'albums#add', as: 'add_album'

    resources :songs

    


end
