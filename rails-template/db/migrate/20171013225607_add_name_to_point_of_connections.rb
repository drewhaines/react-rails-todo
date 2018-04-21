class AddNameToPointOfConnections < ActiveRecord::Migration
  def change
    add_column :point_of_connections, :name, :string
  end
end
