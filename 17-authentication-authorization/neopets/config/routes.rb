Rails.application.routes.draw do
  resources :posts, only: [:new, :create]
  resources :users, only: [:index, :show, :new, :create]
  resources :fantasy_creatures 

  # resources :sessions

  get '/sessions/login', to: 'sessions#new', as: 'login'
  post '/sessions', to: 'sessions#create', as: 'sessions'
  delete '/sessions', to: 'sessions#destroy'




  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



  # get "/fantasy_creatures", to: "fantasy_creatures#index", as: "fantasy_creatures"
  # get "/fantasy_creatures/new", to: "fantasy_creatures#new", as: "new_fantasy_creature"
  # get "/fantasy_creatures/:id", to: "fantasy_creatures#show", as: "fantasy_creature" 
  

end
