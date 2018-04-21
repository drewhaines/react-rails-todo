class Customer < ActiveRecord::Base
  has_many :customer_users
  has_many :users, through: :customer_users
  has_many :sites

  validates :name, :address, :city, :state, :zip, presence: true

  def as_json(options={})
    {
      id: self.id,
      name: self.name,
      email: self.users.first.present? ? self.users.first.email : 'test@example.com',
      phone: self.users.first.present? ? self.users.first.phone : '123-456-7890',
      address: self.address,
      address2: self.address2,
      city: self.city,
      state: self.state,
      zip: self.zip,
      time_zone: self.time_zone,
      is_contractor: self.is_contractor
    }
  end
end
