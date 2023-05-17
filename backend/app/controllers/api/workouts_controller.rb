class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    @exercise_sets = ExerciseSet.all
    render json: {workouts: @workouts, exercise_sets: @exercise_sets }
  end

  def show
    @workout = Workout.find(params[:id])
    render json: @workout
  end
  
  def create
    @workout = Workout.new(workout_params)
    
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

  if update_workout || update_exercise_sets
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

  def update_exercise_sets(exercise_sets_params, workout_id)
    return unless exercise_sets_params
  
    exercise_set_ids = exercise_sets_params.map { |exercise_set_params| exercise_set_params[:id] }
  
    existing_exercise_sets = ExerciseSet.where(workout_id: workout_id, id: exercise_set_ids)
  
    exercise_sets_params.each do |exercise_set_params|
      exercise_set = existing_exercise_sets.find { |existing_exercise_set| existing_exercise_set.id == exercise_set_params[:id] }
  
      if exercise_set
        exercise_set.update(exercise_set_params)
        existing_exercise_sets = existing_exercise_sets.reject { |existing_exercise_set| existing_exercise_set.id == exercise_set_params[:id] }
      else
        new_exercise_set = ExerciseSet.new(exercise_set_params)
        new_exercise_set.workout_id = workout_id
        new_exercise_set.save
      end
    end
  end

  def delete_set_workouts(workout)
    workout.exercise_sets.each do |exercise_set|
      SetWorkout.where(exercise_set_id: exercise_set.id, workout_id: workout.id).destroy_all
    end
  end
end
