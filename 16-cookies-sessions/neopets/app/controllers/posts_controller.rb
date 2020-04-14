class PostsController < ApplicationController
  def new 
    @post = Post.new
  end 

  def create 
    post = Post.create(post_params)

    # redirect_to user_path(post.user)
    # redirect_to user_path(params[:post][:user_id])
    redirect_to post.user
  end 

  private 

  def post_params
    params.require(:post).permit(:user_id, :fantasy_creature_id, :content, :rating)
  end 
end
