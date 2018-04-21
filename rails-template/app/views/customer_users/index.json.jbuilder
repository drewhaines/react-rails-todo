json.array!(@customer_users) do |customer_user|
  json.extract! customer_user, :id, :customer_id, :user_id, :role_id
  json.url customer_user_url(customer_user, format: :json)
end
