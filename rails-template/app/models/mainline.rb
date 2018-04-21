class Mainline < ActiveRecord::Base
  has_many :point_of_connections
  belongs_to :site

  validates :name, presence: true

  def useCapacity=(val)
    asdf
    self.use_capacity = val
  end

  def capacityWithPump=(val)
    self.capacity_with_pump = val
  end

  def capacityWithoutPump=(val)
    self.capacity_without_pump = val
  end

  def breakDuringIrrigation=(val)
    self.break_during_irrigation = val
  end

  def breakDuringOverride=(val)
    self.break_during_override = val
  end

  def breakAllOtherTimes=(val)
    self.break_all_other_times = val
  end

  def compareFlowRate=(val)
    self.compare_flow_rate = val
  end

  def flowRate1To=(val)
    self.flow_rate_1_to = val
  end

  def flowRate1Plus=(val)
    self.flow_rate_1_plus = val
  end

  def flowRate1Minus=(val)
    self.flow_rate_1_minus = val
  end

  def flowRate2To=(val)
    self.flow_rate_2_to = val
  end

  def flowRate2Plus=(val)
    self.flow_rate_2_plus = val
  end

  def flowRate2Minus=(val)
    self.flow_rate_2_minus = val
  end

  def flowRate3To=(val)
    self.flow_rate_3_to = val
  end

  def flowRate3Plus=(val)
    self.flow_rate_3_plus = val
  end

  def flowRate3Minus=(val)
    self.flow_rate_3_minus = val
  end

  def flowRate4Plus=(val)
    self.flow_rate_4_plus = val
  end

  def flowRate4Minus=(val)
    self.flow_rate_4_minus = val
  end

  def useCapacity=(val)
    self.use_capacity = val
  end

  def sundayOverrideOpen=(val)
    self.sunday_override_open = val
  end

  def sundayOverrideOpenTime=(val)
    self.sunday_override_open_time = val
  end

  def sundayOverrideClose=(val)
    self.sunday_override_close = val
  end

  def sundayOverrideCloseTime=(val)
    self.sunday_override_close_time = val
  end

  def mondayOverrideOpen=(val)
    self.monday_override_open = val
  end

  def mondayOverrideOpenTime=(val)
    self.monday_override_open_time = val
  end

  def mondayOverrideClose=(val)
    self.monday_override_close = val
  end

  def mondayOverrideCloseTime=(val)
    self.monday_override_close_time = val
  end

  def tuesdayOverrideOpen=(val)
    self.tuesday_override_open = val
  end

  def tuesdayOverrideOpenTime=(val)
    self.tuesday_override_open_time = val
  end

  def tuesdayOverrideClose=(val)
    self.tuesday_override_close = val
  end

  def tuesdayOverrideCloseTime=(val)
    self.tuesday_override_close_time = val
  end

  def wednesdayOverrideOpen=(val)
    self.wednesday_override_open = val
  end

  def wednesdayOverrideOpenTime=(val)
    self.wednesday_override_open_time = val
  end

  def wednesdayOverrideClose=(val)
    self.wednesday_override_close = val
  end

  def wednesdayOverrideCloseTime=(val)
    self.wednesday_override_close_time = val
  end

  def thursdayOverrideOpen=(val)
    self.thursday_override_open = val
  end

  def thursdayOverrideOpenTime=(val)
    self.thursday_override_open_time = val
  end

  def thursdayOverrideClose=(val)
    self.thursday_override_close = val
  end

  def thursdayOverrideCloseTime=(val)
    self.thursday_override_close_time = val
  end

  def fridayOverrideOpen=(val)
    self.friday_override_open = val
  end

  def fridayOverrideOpenTime=(val)
    self.friday_override_open_time = val
  end

  def fridayOverrideClose=(val)
    self.friday_override_close = val
  end

  def fridayOverrideCloseTime=(val)
    self.friday_override_close_time = val
  end

  def saturdayOverrideOpen=(val)
    self.saturday_override_open = val
  end

  def saturdayOverrideOpenTime=(val)
    self.saturday_override_open_time = val
  end

  def saturdayOverrideClose=(val)
    self.saturday_override_close = val
  end

  def saturdayOverrideCloseTime=(val)
    self.saturday_override_close_time = val
  end

  def as_json(options={})
    {
      id: self.id,
      name: self.name,
      useCapacity: self.use_capacity,
      capacityWithPump: self.capacity_with_pump,
      capacityWithoutPump: self.capacity_without_pump,
      breakDuringIrrigation: self.break_during_irrigation,
      breakDuringOverride: self.break_during_override,
      breakAllOtherTimes: self.break_all_other_times,
      compareFlowRate: self.compare_flow_rate,
      flowRate1To: self.flow_rate_1_to,
      flowRate1Plus: self.flow_rate_1_plus,
      flowRate1Minus: self.flow_rate_1_minus,
      flowRate2To: self.flow_rate_2_to,
      flowRate2Plus: self.flow_rate_2_plus,
      flowRate2Minus: self.flow_rate_2_minus,
      flowRate3To: self.flow_rate_3_to,
      flowRate3Plus: self.flow_rate_3_plus,
      flowRate3Minus: self.flow_rate_3_minus,
      flowRate4Plus: self.flow_rate_4_plus,
      flowRate4Minus: self.flow_rate_4_minus,
      sundayOverrideOpen: self.sunday_override_open,
      sundayOverrideOpenTime: self.sunday_override_open_time,
      sundayOverrideClose: self.sunday_override_close,
      sundayOverrideCloseTime: self.sunday_override_close_time,
      mondayOverrideOpen: self.monday_override_open,
      mondayOverrideOpenTime: self.monday_override_open_time,
      mondayOverrideClose: self.monday_override_close,
      mondayOverrideCloseTime: self.monday_override_close_time,
      tuesdayOverrideOpen: self.tuesday_override_open,
      tuesdayOverrideOpenTime: self.tuesday_override_open_time,
      tuesdayOverrideClose: self.tuesday_override_close,
      tuesdayOverrideCloseTime: self.tuesday_override_close_time,
      wednesdayOverrideOpen: self.wednesday_override_open,
      wednesdayOverrideOpenTime: self.wednesday_override_open_time,
      wednesdayOverrideClose: self.wednesday_override_close,
      wednesdayOverrideCloseTime: self.wednesday_override_close_time,
      thursdayOverrideOpen: self.thursday_override_open,
      thursdayOverrideOpenTime: self.thursday_override_open_time,
      thursdayOverrideClose: self.thursday_override_close,
      thursdayOverrideCloseTime: self.thursday_override_close_time,
      fridayOverrideOpen: self.friday_override_open,
      fridayOverrideOpenTime: self.friday_override_open_time,
      fridayOverrideClose: self.friday_override_close,
      fridayOverrideCloseTime: self.friday_override_close_time,
      saturdayOverrideOpen: self.saturday_override_open,
      saturdayOverrideOpenTime: self.saturday_override_open_time,
      saturdayOverrideClose: self.saturday_override_close,
      saturdayOverrideCloseTime: self.saturday_override_close_time
    }
  end
end
