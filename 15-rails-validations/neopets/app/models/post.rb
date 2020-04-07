class Post < ApplicationRecord
  belongs_to :user
  belongs_to :fantasy_creature
end
