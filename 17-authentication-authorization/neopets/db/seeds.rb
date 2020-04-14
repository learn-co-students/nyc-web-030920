# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FantasyCreature.destroy_all
User.destroy_all
Post.destroy_all

creatures = [
  {name: "Dragon", img_url: "https://vignette.wikia.nocookie.net/gameofthrones/images/e/e0/Dragons_S8_Ep_1.jpg/revision/latest?cb=20190415031732", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Phoenix", img_url: "https://i.ytimg.com/vi/r6TnrsgBqRw/maxresdefault.jpg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Mermaid", img_url: "https://vikasayoga.com/wp-content/uploads/2017/10/Mermaid-Header-1321x707.jpg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Kraken", img_url: "https://coinnews.guru/wp-content/uploads/2018/09/kraken-CNG.jpeg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Pegasus", img_url: "https://pegasusgroup.io/img/pegasusGold.jpg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Griffin", img_url: "https://cdna.artstation.com/p/assets/images/images/018/991/054/large/paul-canavan-goldmane-griffin.jpg?1561543587", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Werewolf", img_url: "https://vignette.wikia.nocookie.net/powerlisting/images/0/03/Werewolf_HD.jpg/revision/latest?cb=20140117043025", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Fairy", img_url: "https://vignette.wikia.nocookie.net/bright/images/2/23/Ian-joyner-fairy-fin-004.jpg/revision/latest?cb=20190212231224", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Centaurs", img_url: "https://ashleewillisauthor.files.wordpress.com/2015/01/centaurs.jpg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Minotaur", img_url: "https://vignette.wikia.nocookie.net/assassinscreed/images/a/aa/ACOD_Minotaur.png/revision/latest?cb=20190202052336", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Gorgon", img_url: "https://sites.google.com/site/brookwoodhighschoolnet/_/rsrc/1472781335647/background-story-of-gorgons-1/18lvaopsncbwpjpg.jpg?height=877&width=805", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Goblin", img_url: "https://previews.123rf.com/images/tsuneo/tsuneo1712/tsuneo171200839/92120149-goblin.jpg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Gnomes", img_url: "https://images.homedepot-static.com/productImages/c370a843-eddb-4186-a976-417cee6ecb00/svn/sunnydaze-decor-garden-statues-xca-102608001-64_1000.jpg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Ogre", img_url: "https://i.pinimg.com/originals/37/bf/24/37bf24b82849a26b67d468e69ba53654.jpg", finishing_move: "", environment: "" , strength: rand(1..10)},
  {name: "Cyclops", img_url: "https://cranstononline.com/uploads/original/1333482116_165d.jpg", finishing_move: "", environment: "" , strength: rand(1..10)}
]

humans = [
  {name: "Alex Silver", img_url: "https://ca.slack-edge.com/T02MD9XTF-UV3B4DGHM-c9f0fa880a8e-512"},
  {name: "Alex Sterrantino", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTSQAJC48-bd9ebbe240cd-512"},
  {name: "Alexander Schelchere", img_url: "https://ca.slack-edge.com/T02MD9XTF-UK8BFUYUW-a03c9cbb43c8-512"},
  {name: "Andrew Casarsa", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTFAJGADR-cf894db2cc40-512"},
  {name: "Brett Bedevian", img_url: "https://ca.slack-edge.com/T02MD9XTF-UV3B4DRV5-c9e3052415f6-512"},
  {name: "Daniel Urbina", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTV12LVL6-54082a1d620c-512"},
  {name: "Diana Ponce", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTV12M5LN-98fab3620794-512"},
  {name: "Duncan Uruchima", img_url: "https://ca.slack-edge.com/T02MD9XTF-USZE859HC-da5291a56afe-512"},
  {name: "Eliot Henson", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTSAY5TQC-daaad1dbb198-512"},
  {name: "Elliott K", img_url: "https://ca.slack-edge.com/T02MD9XTF-UV1F4NDC0-4170b1575cdc-512"},
  {name: "Ethan Fournier", img_url: "https://ca.slack-edge.com/T02MD9XTF-UNDSGQY3H-8d8358573e5b-512"},
  {name: "Jacky Lin", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTUL90AEB-51f029f69ed9-512"},
  {name: "Johnson Kow", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTV12Q4MC-71611b8f0d29-512"},
  {name: "Joseph Cha", img_url: "https://ca.slack-edge.com/T02MD9XTF-USM2G2TNV-f854fbc28824-512"},
  {name: "Lucas Sherwin", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTE14B4HY-e05adc64457b-512"},
  {name: "Ramzy Badaway", img_url: "https://ca.slack-edge.com/T02MD9XTF-US83RBTL7-9c7ae2faf6e7-512"},
  {name: "Rober Keller", img_url: "https://ca.slack-edge.com/T02MD9XTF-UURCGERED-c6d07c8894a3-512"},
  {name: "Ryan Vaznis", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTSAYAYS0-1d29f39b322c-512"},
  {name: "Stephen Verdi", img_url: "https://ca.slack-edge.com/T02MD9XTF-UV1FPNH1B-b994e244a84f-512"},
  {name: "Uriel Rodriguez", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTFAJQM51-d8c7ed79404f-512"},
  {name: "Vanessa Martinez", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTV12UKE2-f2631cdf4057-512"},
  {name: "Vivica Ma", img_url: "https://ca.slack-edge.com/T02MD9XTF-UV3MBDDL6-a472bea4c357-512"},
  {name: "Yahya Gok", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTGL2GBU1-11cd17d8d57f-512"},
  {name: "YueYing", img_url: "https://ca.slack-edge.com/T02MD9XTF-UV3MBDNGN-aed6e5c53f69-512"}
]

# 50.times do 
#   FantasyCreature.create(name: Faker::Games::ElderScrolls.creature, finishing_move: Faker::Ancient.hero, environment: Faker::Games::ElderScrolls.region, img_url: Faker::Fillmurray.image, strength: rand(1..10))
# end 


puts ".... Seeding Fantasy Creatures"
creatures.each do |creature|
  FantasyCreature.create(creature)
end 

puts ".... Seeding Humans"
humans.each do |human| 
  User.create(human)
end  

puts "... Creating Relationships"

50.times do 
  Post.create(user_id: User.all.sample.id, fantasy_creature: FantasyCreature.all.sample, content: Faker::Movies::BackToTheFuture.quote, rating: rand(1..10))
end 