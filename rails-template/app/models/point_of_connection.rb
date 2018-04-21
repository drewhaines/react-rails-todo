class PointOfConnection < ActiveRecord::Base
  belongs_to :mainline
  belongs_to :controller

  validates :name, presence: true

  def type=(val)
    self.poc_type = val
  end

  def mainlineId=(val)
    self.mainline_id = val
  end

  def controllerId=(val)
    self.controller_id = val
  end

  def usedFor=(val)
    self.poc_used_for = val
  end

  def flowMeter=(val)
    self.flow_meter = val
  end

  def masterValve=(val)
    self.master_valve = val
  end


  def as_json(options={})
    {
      id: self.id,
      name: self.name,
      type: self.poc_type,
      mainlineId: self.mainline_id,
      mainlineName: self.mainline.present? ? self.mainline.name : '',
      controllerId: self.controller_id,
      controllerName: self.controller.present? ? self.controller.name : '',
      usedFor: self.poc_used_for,
      flowMeter: self.flow_meter,
      masterValve: self.master_valve
    }
  end
end
