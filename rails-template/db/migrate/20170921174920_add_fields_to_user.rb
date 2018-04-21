class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :primary_contact, :boolean, default: false
    add_column :users, :language, :string
    add_column :users, :report_sort_order, :string
    add_column :users, :homepage, :string
    add_column :users, :time_zone, :string
  end
end
