class ExercisesController < ApplicationController
  def index
    muscle = params[:muscle]
    @exercises = ExerciseAPI.get_exercises_by_muscle(muscle)
    render json: @exercises
  end

  def show
  end
end
