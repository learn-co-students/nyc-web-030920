class PostsController < ApplicationController
  def new 
    @post = Post.new
    @fantasy_creatures = FantasyCreature.all
  end 

  def create 
    post_hash = post_params
    
    post_hash[:user_id] = @current_user.id

    post = Post.create(post_hash)
  
    # redirect_to user_path(post.user)
    # redirect_to user_path(params[:post][:user_id])
    redirect_to post.user
  end 

  private 

  def post_params
    params.require(:post).permit(:fantasy_creature_id, :content, :rating)
  end 
end
