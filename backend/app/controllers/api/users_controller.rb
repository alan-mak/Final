class Api::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def index
    @user = User.all
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      @user.save
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { status: 500, errors: @user.errors }
    end
  end

  private
  
  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :password,
      :street,
      :city,
      :province,
      :post_code
    )
  end
end
