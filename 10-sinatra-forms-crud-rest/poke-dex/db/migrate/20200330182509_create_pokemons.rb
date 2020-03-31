class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name 
      t.string :img_url 
      t.string :ability 
    end 
  end
end
