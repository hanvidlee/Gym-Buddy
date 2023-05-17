class Api::UserWorkoutsController < ApplicationController
  def index
    @userworkouts = UserWorkout.all
  end
end
