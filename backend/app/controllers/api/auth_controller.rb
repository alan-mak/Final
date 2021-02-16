class Api::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
 
  def create
    @user = User.find_by(email: user_params[:email])
    # authenticate method comes from bcrypt
    if @user && @user.authenticate(user_params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end
 
  private
 
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
