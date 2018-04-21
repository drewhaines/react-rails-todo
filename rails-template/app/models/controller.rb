class Controller < ActiveRecord::Base
  belongs_to :site

  def as_json(options={})
    {
      id: self.id,
      name: self.name,
      partNumber: self.part_number,
      serialNumber: self.serial_number,
    }
  end
end
