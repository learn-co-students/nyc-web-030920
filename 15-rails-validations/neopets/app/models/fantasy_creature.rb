class FantasyCreature < ApplicationRecord
  has_many :posts, dependent: :destroy 
  has_many :users, through: :posts

  validates :name, uniqueness: true
  validates :name, :strength, presence: true
  validates :strength, numericality: {greater_than: 0, less_than: 11}

  validate :name_can_not_be_greg

  def name_can_not_be_greg
    if self.name && self.name.downcase == "greg"
      self.errors.add(:name, "Can not be GREG")
    end 
  end 

end
