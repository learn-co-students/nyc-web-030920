Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :fantasy_creatures #, only: [:index, :show, :new, :create, :edit, :update, :delete]


  # get "/fantasy_creatures", to: "fantasy_creatures#index", as: "fantasy_creatures"
  # get "/fantasy_creatures/new", to: "fantasy_creatures#new", as: "new_fantasy_creature"
  # get "/fantasy_creatures/:id", to: "fantasy_creatures#show", as: "fantasy_creature" 
  

end
