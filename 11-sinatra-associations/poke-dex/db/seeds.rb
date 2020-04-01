# require 'rest-client'

Pokemon.destroy_all


50.times do |i|
  url = "https://pokeapi.co/api/v2/pokemon/#{i + 1}/"
  
  resp = RestClient.get(url)
  json_resp = JSON.parse(resp) 
  
  ability = json_resp["abilities"][0]["ability"]["name"]
  name = json_resp["species"]["name"]
  img_url = json_resp["sprites"]["front_default"]
  
  # binding.pry
  
  Pokemon.create(name: name, img_url: img_url, ability: ability)
end 

names = ["Greg", "Sarah", "Jen", "Mike", "Turner", "Wade", "Ash", "Blue", "Brock", "Broke", "Kim", "Gary"]

100.times do 
  Trainer.create(name: names.sample, years: rand(20..100), pokemon_id: Pokemon.all.sample.id)
end 




