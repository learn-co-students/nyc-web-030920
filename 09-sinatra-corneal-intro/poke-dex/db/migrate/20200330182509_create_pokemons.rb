class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name 
      t.integer :age 
      t.string :ability 
    end 
  end
end
