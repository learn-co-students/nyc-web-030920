class AddYearToStudents < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :year, :integer
  end
end
