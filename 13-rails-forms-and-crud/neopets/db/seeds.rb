# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FantasyCreature.destroy_all

puts ".... Seeding fantasy creatures"

50.times do 
  FantasyCreature.create(name: Faker::Games::ElderScrolls.creature, finishing_move: Faker::Ancient.hero, environment: Faker::Games::ElderScrolls.region, img_url: Faker::Fillmurray.image, strength: rand(1..10))
end 