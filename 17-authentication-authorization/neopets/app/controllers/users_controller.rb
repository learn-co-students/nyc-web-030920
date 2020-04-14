class UsersController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def index 
    @users = User.all

    # render :index
  end 

  def show
    @user = User.find(params[:id])

    if @user == @current_user
      # render :show
    else
      flash[:error] = "You can only see your profile"
      redirect_to users_path
    end 

  end 

  def new
    @user = User.new
  end 

  def create 
    user = User.create(user_params)
    
    if user.valid? 
      session[:user_id] = user.id 
      redirect_to user
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path 
    end 
  end 

  private 

  def user_params
    params.require(:user).permit(:name, :img_url, :password)
  end 
end
