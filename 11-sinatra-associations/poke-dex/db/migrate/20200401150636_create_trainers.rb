class CreateTrainers < ActiveRecord::Migration
  def change
    create_table :trainers do |t|
      t.string :name 
      t.integer :years
      t.string :img_url 
      t.integer :pokemon_id
    end 
  end
end
