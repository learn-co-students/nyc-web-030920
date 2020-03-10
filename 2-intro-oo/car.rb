require 'pry'

class Car
  attr_reader :make, :model, :hate_global
  attr_writer :driving
  attr_accessor :nickname
  @@all=[]
  def initialize(make, model, nickname="Travolta")
    @make = make
    @model = model
    @nickname = nickname
    @driving = false
    # @num_of_airbags=2
    @hate_global = "something else"
    Car.all << self 
  end

  def drive 
    @driving = true
    puts "#{self.nickname} is driving"
  end
  def park 

    @driving = false 
    puts "car is in park"
  end

  def self.all  
    @@all
    #return an array of all cars 
  end




end

# car should be able to drive
# car should be able to park
# break*
# honk
# play music
# deploy_airbags

car1 = Car.new("Toyota", "Camry")
car2 = Car.new("Honda", "Civic")
car3 = Car.new("Ford", "Escape")
car4 = Car.new("Subaru", "Outback")
car5 = Car.new("Mercedes", "C-Class")

binding.pry 

puts "something"