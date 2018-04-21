json.array!(@mainlines) do |mainline|
  json.extract! mainline, :id, :name, :site_id
  json.url mainline_url(mainline, format: :json)
end
