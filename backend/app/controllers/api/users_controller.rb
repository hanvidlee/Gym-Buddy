class Api::UsersController < ApplicationController
  # index, create, new, update, edit, destroy
  def index
    users = User.all
    render json: users
  end
end
