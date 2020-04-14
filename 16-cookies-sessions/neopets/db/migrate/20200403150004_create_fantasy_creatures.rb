class CreateFantasyCreatures < ActiveRecord::Migration[6.0]
  def change
    create_table :fantasy_creatures do |t|
      t.string :name
      t.string :environment
      t.integer :strength
      t.string :img_url
      t.string :finishing_move

      t.timestamps
    end
  end
end
