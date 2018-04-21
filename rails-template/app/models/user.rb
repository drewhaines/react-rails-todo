class User < ActiveRecord::Base
  include DeviseTokenAuth::Concerns::User
  has_many :customer_users
  has_many :customers, through: :customer_users

  before_validation :confirm_user, on: :create
  validates :first_name, :last_name, :email, presence: true

  def confirm_user
    self.confirmed_at = Time.now
  end

  def role(customer)
    if customer.present?
      customer_user = CustomerUser.where(user_id: self.id, customer_id: customer.id).first
    else
      customer_user = nil
    end
    if customer_user.present?
      return customer_user.role
    else
      return nil
    end
  end

  def set_role(role, customer)
    if customer.present?
      customer_user = CustomerUser.where(user_id: self.id, customer_id: customer.id).first
    else
      customer_user = nil
    end
    if customer_user.present?
      customer_user.role = role
      customer_user.save
    end
  end

  def as_json(options={})
    {
      id: self.id,
      firstName: self.first_name,
      lastName: self.last_name,
      email: self.email,
      phone: self.phone,
      role: self.role(self.customers.first).present? ? self.role(self.customers.first).id : 1,
      roleName: self.role(self.customers.first).present? ? self.role(self.customers.first).name : 'Administator',
      language: self.language,
      time_zone: self.time_zone,
      primary_contact: self.primary_contact,
      report_sort_order: self.report_sort_order,
      homepage: self.homepage
    }
  end
end
