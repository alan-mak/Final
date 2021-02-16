class Api::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    users = User.create(user_params)
    if users
      render json: users
    else
      render json: users.errors
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
