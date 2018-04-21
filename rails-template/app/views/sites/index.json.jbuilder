json.array!(@sites) do |site|
  json.extract! site, :id, :name, :customer_id
  json.url site_url(site, format: :json)
end
