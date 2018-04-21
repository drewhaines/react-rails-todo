json.array!(@point_of_connections) do |point_of_connection|
  json.extract! point_of_connection, :id, :poc_type, :mainline_id, :poc_used_for, :flow_meter, :master_valve, :name
  json.url point_of_connection_url(point_of_connection, format: :json)
end
