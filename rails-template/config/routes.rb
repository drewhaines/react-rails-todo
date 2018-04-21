Rails.application.routes.draw do
  resources :controllers
  resources :point_of_connections
  resources :mainlines
  resources :sites
  resources :role_permissions
  resources :permissions
  resources :roles
  resources :customer_users
  resources :customers
  resources :users
  mount_devise_token_auth_for 'User', at: 'auth'

  get 'api/roles', to: 'roles#roles'
  get 'api/permissions', to: 'permissions#permissions'
  get 'api/customers', to: 'customers#customers'
  get 'api/users', to: 'users#users'
end
