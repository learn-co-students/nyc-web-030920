class RemoveSocialSecurityFromPatients < ActiveRecord::Migration[6.0]
  def change
    remove_column :patients, :social_security
  end
end
