class AddIsContractorToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :is_contractor, :boolean
  end
end
