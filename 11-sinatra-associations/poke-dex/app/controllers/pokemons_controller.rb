class PokemonsController < ApplicationController

  # INDEX Action
  get '/pokemons' do
    @pokemons = Pokemon.all

    erb :"pokemons/index"
  end

  #NEW Action
  get '/pokemons/new' do 
    erb :"pokemons/new"
  end 

  # CREATE Actions
  post '/pokemons' do
   pokemon = Pokemon.create(params)
  
   redirect to "/pokemons/#{pokemon.id}"
  end
  
  # EDIT Action
  get '/pokemons/:id/edit' do
    @pokemon = Pokemon.find(params[:id])
    
    erb :"pokemons/edit"
  end
  
  # UPDATE Action
  patch '/pokemons/:id' do 
    pokemon = Pokemon.find(params[:id])

    pokemon.update(params[:pokemon])
    
    redirect to "/pokemons/#{pokemon.id}"
  end 
  
  # SHOW Action
  get '/pokemons/:id' do
    @pokemon = Pokemon.find(params[:id])
    
    erb :"pokemons/show"
  end
  
  delete '/pokemons/:id' do 
    pokemon = Pokemon.find(params[:id])
    
    pokemon.delete 
    
    redirect to '/pokemons'
  end 
end