class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def new
  end 

  def create 
    user = User.find_by(name: params[:session][:name])

    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to user 
    else 
      flash[:errors] = ["username or password is not right"]

      redirect_to new_user_path
      # redirect_back fallback_location: new_user_path
    end 
  end 

  def destroy 
    # session[:user_id] = nil
    session.delete(:user_id)
    redirect_to fantasy_creatures_path
  end 

end
