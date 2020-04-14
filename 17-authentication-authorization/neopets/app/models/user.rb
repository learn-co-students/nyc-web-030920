class User < ApplicationRecord
  has_many :posts 
  has_many :fantasy_creatures, through: :posts 

  has_secure_password

  # def password=(secret)
  #   p = BCrypt::Password.create(secret)
  #   self.password_digest = p
  #   p.save
  # end 

  # def password 
  # end 
end
