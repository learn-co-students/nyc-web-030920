class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.integer :age 
      t.boolean :is_sick
      t.string :gender
    end
  end
end
