require 'test_helper'

class PointOfConnectionsControllerTest < ActionController::TestCase
  setup do
    @point_of_connection = point_of_connections(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:point_of_connections)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create point_of_connection" do
    assert_difference('PointOfConnection.count') do
      post :create, point_of_connection: { flow_meter: @point_of_connection.flow_meter, mainline_id: @point_of_connection.mainline_id, master_valve: @point_of_connection.master_valve, poc_type: @point_of_connection.poc_type, poc_used_for: @point_of_connection.poc_used_for }
    end

    assert_redirected_to point_of_connection_path(assigns(:point_of_connection))
  end

  test "should show point_of_connection" do
    get :show, id: @point_of_connection
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @point_of_connection
    assert_response :success
  end

  test "should update point_of_connection" do
    patch :update, id: @point_of_connection, point_of_connection: { flow_meter: @point_of_connection.flow_meter, mainline_id: @point_of_connection.mainline_id, master_valve: @point_of_connection.master_valve, poc_type: @point_of_connection.poc_type, poc_used_for: @point_of_connection.poc_used_for }
    assert_redirected_to point_of_connection_path(assigns(:point_of_connection))
  end

  test "should destroy point_of_connection" do
    assert_difference('PointOfConnection.count', -1) do
      delete :destroy, id: @point_of_connection
    end

    assert_redirected_to point_of_connections_path
  end
end
