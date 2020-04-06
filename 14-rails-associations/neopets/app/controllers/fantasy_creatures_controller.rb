class FantasyCreaturesController < ApplicationController
  before_action :find_creature, only: [:show, :update, :edit, :destroy] 

  def index 
    @fantasy_creatures = FantasyCreature.all

    # render :index
  end

  def show 
    # @fantasy_creature = FantasyCreature.find(params[:id])
    # render :show
  end 

  def new 
    @fantasy_creature = FantasyCreature.new
    # render :new
  end 

  def create 
    @fantasy_creature = FantasyCreature.create(fanatasy_creature_params)

    # redirect_to fantasy_creature_path(fantasy_creature.id)
    # redirect_to fantasy_creature_path(fantasy_creature)
    redirect_to fantasy_creature
  end 

  def edit 
    # @fantasy_creature = FantasyCreature.find(params[:id])
    # render :edit
  end
  
  def update 
    # @fantasy_creature = FantasyCreature.find(params[:id])
    fantasy_creature.update(fanatasy_creature_params)
    
    redirect_to @fantasy_creature
  end
  
  
  def destroy 
    # @fantasy_creature = FantasyCreature.find(params[:id])
    @fantasy_creature.destroy

    redirect_to fantasy_creatures_path
  end 


  private 

  def fanatasy_creature_params
    params.require(:fantasy_creature).permit(:name, :finishing_move, :strength, :img_url, :environment)
  end

  def find_creature
    @fantasy_creature = FantasyCreature.find(params[:id])
  end 
end
