class AddPhoneNumberToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :phone_number, :integer
  end
end
