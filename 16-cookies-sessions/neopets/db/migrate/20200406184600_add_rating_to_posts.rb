class AddRatingToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :rating, :integer
  end
end
