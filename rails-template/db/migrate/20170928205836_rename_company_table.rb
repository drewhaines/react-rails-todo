class RenameCompanyTable < ActiveRecord::Migration
  def change
    rename_table :companies, :customers
    rename_table :company_users, :customer_users
    rename_column :customer_users, :company_id, :customer_id
  end
end
