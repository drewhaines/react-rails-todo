json.array!(@controllers) do |controller|
  json.extract! controller, :id, :site_id, :name, :installed_on, :communications_enabled, :hub_settings, :ip_address, :communication_type, :communication_address, :controller_type, :share_et_from, :share_rain_from, :rain_polling, :latitude, :longitude, :notes, :part_number, :serial_number
  json.url controller_url(controller, format: :json)
end
