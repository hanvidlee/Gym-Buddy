class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def login
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: { success: true, user: @user } #dont know if this correct
    else
      render json: { success: false, message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def register
    @user = User.new(user_params)
  
    if @user.save
      session[:user_id] = @user.id
      render json: { success: true, user: @user }
    else
      render json: { success: false, message: 'Sumting Wong' }, status: :unprocessable_entity
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
  end
end
