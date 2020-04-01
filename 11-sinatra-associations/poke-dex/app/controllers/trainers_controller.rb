class TrainersController < ApplicationController
    # INDEX Action
    get '/trainers' do
      @trainers = Trainer.all
  
      erb :"trainers/index"
    end

    # NEW Action (render new form)
    get '/trainers/new' do
      
      erb :"trainers/new"
    end

    #CREATE Action (creaet new instance)
    post '/trainers' do 
      trainer = Trainer.create(params)

      redirect to "/pokemons/#{trainer.pokemon.id}"
    end 
  
end