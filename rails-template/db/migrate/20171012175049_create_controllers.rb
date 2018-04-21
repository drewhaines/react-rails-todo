class CreateControllers < ActiveRecord::Migration
  def change
    create_table :controllers do |t|
      t.integer :site_id
      t.string :name
      t.string :installed_on
      t.boolean :communications_enabled
      t.string :hub_settings
      t.string :ip_address
      t.string :communication_type
      t.string :communication_address
      t.string :controller_type
      t.string :share_et_from
      t.string :share_rain_from
      t.boolean :rain_polling
      t.string :latitude
      t.string :longitude
      t.string :notes
      t.string :part_number
      t.string :serial_number

      t.timestamps null: false
    end
  end
end
