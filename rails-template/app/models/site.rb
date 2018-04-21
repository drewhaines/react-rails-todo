class Site < ActiveRecord::Base
  belongs_to :customer
  has_many :controllers
  has_many :mainlines

  validates :name, :site_type, presence: true
  validates :site_id, :controller_serial_number, presence: true, if: :CS3000?

  def CS3000?
    self.site_type == 'CS3000'
  end

  def create_controller(serial_number)
    Controller.create!(
      site_id: self.id,
      name: Faker::GameOfThrones.city + " Controller",
      installed_on: Date.current.to_s,
      communications_enabled: true,
      hub_settings: 'Controller is not involved with a hub',
      ip_address: Faker::Internet.ip_v4_address,
      part_number: Faker::Number.number(5),
      serial_number: serial_number,
      rain_polling: true
    )
  end

  def customerId=(val)
    self.customer_id = val
  end

  def siteId=(val)
    self.site_id = val
  end

  def siteType=(val)
    self.site_type = val
  end

  def controllerSerialNumber=(val)
    self.controller_serial_number = val
  end

  def as_json(options={})
    {
      id: self.id,
      name: self.name,
      siteType: self.site_type,
      siteId: self.site_id,
      controllerSerialNumber: self.controller_serial_number,
      controllers: self.controllers
    }
  end
end
