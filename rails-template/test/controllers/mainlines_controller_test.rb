require 'test_helper'

class MainlinesControllerTest < ActionController::TestCase
  setup do
    @mainline = mainlines(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mainlines)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mainline" do
    assert_difference('Mainline.count') do
      post :create, mainline: { name: @mainline.name, site_id: @mainline.site_id }
    end

    assert_redirected_to mainline_path(assigns(:mainline))
  end

  test "should show mainline" do
    get :show, id: @mainline
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mainline
    assert_response :success
  end

  test "should update mainline" do
    patch :update, id: @mainline, mainline: { name: @mainline.name, site_id: @mainline.site_id }
    assert_redirected_to mainline_path(assigns(:mainline))
  end

  test "should destroy mainline" do
    assert_difference('Mainline.count', -1) do
      delete :destroy, id: @mainline
    end

    assert_redirected_to mainlines_path
  end
end
