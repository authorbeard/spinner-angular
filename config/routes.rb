Rails.application.routes.draw do


  resources :songs
    root 'application#angular'

    devise_for :users
    as :user do
      get "/signin" => "devise/sessions#new"
      get "/signout" => "devise/sessions#destroy"
    end
    resources :users, only: [:show, :edit, :update, :destroy]


    resources :albums
      post '/albums/:id/spin', to: 'albums#spin', as: "spin"
      get '/albums/:id/import_songs', to: 'albums#import_songs', as: 'import_songs'
      post '/albums/:id/add', to: 'albums#add', as: 'add_album'



end
