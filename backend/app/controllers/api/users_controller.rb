class Api::UsersController < ApplicationController
  # index, create, new, update, edit, destroy
  def index
    users = User.all
    render json: users
  end

  def login
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { success: true, user: user }
    else
      render json: { success: false, message: 'Invalid email or password' }, status: :unauthorized
    end
  end
end
