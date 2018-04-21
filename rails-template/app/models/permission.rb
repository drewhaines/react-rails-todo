class Permission < ActiveRecord::Base
  has_many :role_permissions
  has_many :roles, through: :role_permissions

  def as_json(options={})
    { value: self.id, name: self.name }
  end
end
