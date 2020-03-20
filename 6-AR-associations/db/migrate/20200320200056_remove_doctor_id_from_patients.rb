class RemoveDoctorIdFromPatients < ActiveRecord::Migration[6.0]
  def change
    remove_column :patients, :doctor_id
  end
end
