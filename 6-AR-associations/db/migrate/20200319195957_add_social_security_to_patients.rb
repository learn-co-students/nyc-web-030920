class AddSocialSecurityToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :social_security, :integer
  end
end
