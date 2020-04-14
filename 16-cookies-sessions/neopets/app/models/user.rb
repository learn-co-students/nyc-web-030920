class User < ApplicationRecord
  has_many :posts 
  has_many :fantasy_creatures, through: :posts 
end
