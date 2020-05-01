require 'pry'

class Dog
  attr_accessor :name, :favorite_toy
  
  def initialize(name, favorite_toy)
    @name = name
    @favorite_toy = favorite_toy
  end

  def speak
    "Woof woof, my name is #{self.name}"
  end

  def self.walk
    "I'm of class #{self} and I'm walking"
  end
end

neikko = Dog.new("Neikko", "rope")
perky = Dog.new("Perky", "horse manure")

binding.pry
puts 'okthxbye' 