class AddAddressToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :address, :string
    add_column :companies, :address2, :string
    add_column :companies, :city, :string
    add_column :companies, :state, :string
    add_column :companies, :zip, :string
  end
end
