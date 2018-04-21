class AddFieldsToSite < ActiveRecord::Migration
  def change
    add_column :sites, :site_type, :string
    add_column :sites, :site_id, :string
    add_column :sites, :controller_serial_number, :string
  end
end
