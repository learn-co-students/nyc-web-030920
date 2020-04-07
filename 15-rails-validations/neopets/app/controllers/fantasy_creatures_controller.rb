class FantasyCreaturesController < ApplicationController
  before_action :find_creature, only: [:show, :update, :edit, :destroy] 

  def index 
    @fantasy_creatures = FantasyCreature.all
  end

  def show 
  end 

  def new 
    @fantasy_creature = FantasyCreature.new()
  end 

  def create 
    @fantasy_creature = FantasyCreature.create(fanatasy_creature_params)
    byebug
    if @fantasy_creature.valid?
      redirect_to @fantasy_creature
    else 
      flash[:errors] = @fantasy_creature.errors.full_messages
      redirect_to  new_fantasy_creature_path
    end 
  end 

  def edit 
  end
  
  def update 
    
    if @fantasy_creature.update(fanatasy_creature_params)
      redirect_to @fantasy_creature
    else 
      flash[:errors] = @fantasy_creature.errors.full_messages
      redirect_to  edit_fantasy_creature_path(@fantasy_creature)
    end 
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
