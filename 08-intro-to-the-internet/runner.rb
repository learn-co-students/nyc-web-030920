require 'sinatra'
require 'pry'

get '/my_first_request' do 
  # get information from our database/model
  # pass information to view
  "<h1>TEST RESPONSE</h1>"
end 


get '/my_second_request/:beef' do 
  binding.pry
  "<h1>TEST RESPONSE</h1>"
end 