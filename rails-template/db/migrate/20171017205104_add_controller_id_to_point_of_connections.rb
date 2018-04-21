class AddControllerIdToPointOfConnections < ActiveRecord::Migration
  def change
    add_column :point_of_connections, :controller_id, :integer
  end
end
