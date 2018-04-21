class CreatePointOfConnections < ActiveRecord::Migration
  def change
    create_table :point_of_connections do |t|
      t.string :poc_type
      t.integer :mainline_id
      t.string :poc_used_for
      t.string :flow_meter
      t.string :master_valve

      t.timestamps null: false
    end
  end
end
