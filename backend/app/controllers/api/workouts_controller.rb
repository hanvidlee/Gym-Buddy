class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def show
    @workout = Workout.find(params[:id])
    render json: @workout
  end
  
  def create
    @workout = Workout.new(workout_params)
    
    #install postman make request to create route see if we are getting the correct data
    if @workout.save
      create_exercise_sets(params[:exercise_sets])
      create_set_workouts(@workout)
      render json: @workout
    else
      render json: @workout.errors
    end
  end
  
  def edit
    @workout = Workout.find(params[:id])
    @exercise_sets = @workout.exercise_sets
  end

  def update
    @workout = Workout.find(params[:id])

    if @workout.update(workout_params)
      update_exercise_sets(params[:exercise_sets], @workout.id)
      render json: @workout
    else
      render json: @workout.errors
    end
  end

  def destroy
    @workout = Workout.find(params[:id])
    
    if @workout.destroy
      delete_set_workouts(@workout)
    else
      render json: @workout.errors
  end

  private

  def workout_params
    params.require(:workout).permit(:picture, :description) 
  end

  def create_exercise_sets(exercise_sets_params, workout_id)
    return unless exercise_sets_params

    exercise_sets_params.each do |exercise_sets_param|
      exercise_set = ExerciseSet.new(exercise_sets_params)
      exercise_set.save
    end
  end

  def create_set_workouts(workout)
    exercise_set_ids = workout.exercise_sets.map { |exercise_set| exercise_set.id }

    exercise_set_ids.each do |exercise_set_id|
      SetWorkout.create(exercise_set_id: exercise_set_id, workout_id: workout.id)
    end
  end

  def update_exercise_sets(exercise_sets_params)
    return unless exercise_sets_params

    exercise_sets_params.each do |exercise_set_params|
      exercise_set = ExerciseSet.find(exercise_set_params[:id])

      if exercise_set.update(exercise_set_params)
        # Any additional actions or validations after updating the exercise set can be added here
      else
        render json: exercise_set.errors
        return
      end
    end
  end

  def delete_set_workouts(workout)
    workout.exercise_sets.each do |exercise_set|
      SetWorkout.where(exercise_set_id: exercise_set.id, workout_id: workout.id).destroy_all
    end
  end
end
