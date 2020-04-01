class Pokemon < ActiveRecord::Base
  has_many :trainers
end
