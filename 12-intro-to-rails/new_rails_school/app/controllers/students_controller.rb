class StudentsController < ApplicationController
  # get "/students"
  def index
    @students = Student.all

    render :index
  end

  # get "/students/:id"
  def show
    byebug
    @student = Student.find(params[:id])

    # render :show  
  end
end
