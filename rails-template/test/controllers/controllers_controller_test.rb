require 'test_helper'

class ControllersControllerTest < ActionController::TestCase
  setup do
    @controller = controllers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:controllers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create controller" do
    assert_difference('Controller.count') do
      post :create, controller: { communication_address: @controller.communication_address, communication_type: @controller.communication_type, communications_enabled: @controller.communications_enabled, controller_type: @controller.controller_type, hub_settings: @controller.hub_settings, installed_on: @controller.installed_on, ip_address: @controller.ip_address, latitude: @controller.latitude, longitude: @controller.longitude, name: @controller.name, notes: @controller.notes, part_number: @controller.part_number, rain_polling: @controller.rain_polling, serial_number: @controller.serial_number, share_et_from: @controller.share_et_from, share_rain_from: @controller.share_rain_from, site_id: @controller.site_id }
    end

    assert_redirected_to controller_path(assigns(:controller))
  end

  test "should show controller" do
    get :show, id: @controller
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @controller
    assert_response :success
  end

  test "should update controller" do
    patch :update, id: @controller, controller: { communication_address: @controller.communication_address, communication_type: @controller.communication_type, communications_enabled: @controller.communications_enabled, controller_type: @controller.controller_type, hub_settings: @controller.hub_settings, installed_on: @controller.installed_on, ip_address: @controller.ip_address, latitude: @controller.latitude, longitude: @controller.longitude, name: @controller.name, notes: @controller.notes, part_number: @controller.part_number, rain_polling: @controller.rain_polling, serial_number: @controller.serial_number, share_et_from: @controller.share_et_from, share_rain_from: @controller.share_rain_from, site_id: @controller.site_id }
    assert_redirected_to controller_path(assigns(:controller))
  end

  test "should destroy controller" do
    assert_difference('Controller.count', -1) do
      delete :destroy, id: @controller
    end

    assert_redirected_to controllers_path
  end
end
