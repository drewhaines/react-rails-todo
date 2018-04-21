class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def users
    if params['customerId'].present?
      customer = Customer.find_by_id(params['customerId'])
      customer.present? ? users = customer.users.order(:first_name) : users = User.all.order(:first_name)
    else
      users = User.all.order(:first_name)
    end
    render json: {users: users}
  end

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        customer = Customer.find_by_id(params['customer'])
        customer.users << @user if customer.present?
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    if params['user'].present? and params['user']['role'].present? and params['customer'].present?
      customer = Customer.find_by_id(params['customer'])
      role = Role.find_by_id(params['user']['role'])

      if role.present? and customer.present?
        @user.set_role(role, customer)
      end
    end

    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :phone, :provider, :uid, :password, :password_confirmation, :language, :time_zone, :primary_contact, :report_sort_order, :homepage)
    end
end
