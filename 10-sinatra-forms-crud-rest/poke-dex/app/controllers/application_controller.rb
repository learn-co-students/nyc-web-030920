require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  # INDEX Action
  get '/pokemons' do
    @pokemons = Pokemon.all

    erb :index
  end

  #NEW Action
  get '/pokemons/new' do 
    erb :new
  end 

  # CREATE Actions
  post '/pokemons' do
   pokemon = Pokemon.create(params)
  
   redirect to "/pokemons/#{pokemon.id}"
  end
  
  # EDIT Action
  get '/pokemons/:id/edit' do
    @pokemon = Pokemon.find(params[:id])
    
    erb :edit
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

    erb :show
  end



end
