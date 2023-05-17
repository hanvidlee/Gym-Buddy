class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    @exercise_sets = ExerciseSet.all
    @dayworkout = DayWorkout.all
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
    params.require(:workout).permit(:title)
  end

  def create_exercise_sets(exercise_sets_params)
    return unless exercise_sets_params
  
    exercise_sets_params.each do |exercise_sets_param|
      permitted_params = exercise_sets_param.permit(:repetitions, :weight, :quantity)
      exercise_set = ExerciseSet.new(permitted_params)
      exercise_set.workout_id = @workout.id
      exercise_set.save
    end
  end

  def create_set_workouts(workout)
    exercise_set_ids = workout.exercise_sets.map { |exercise_set| exercise_set.id }

    exercise_set_ids.each do |exercise_set_id|
      SetWorkout.create(exercise_set_id: exercise_set_id, workout_id: workout.id)
    end
  end

  def update_workout
    @workout.update(workout_params)
  end

  def update_exercise_sets
    exercise_sets_params = params[:exercise_sets]
  
    return false unless exercise_sets_params
  
    exercise_sets_params.each do |exercise_set_params|
      exercise_set = ExerciseSet.find_by(id: exercise_set_params[:id])
  
      if exercise_set
        exercise_set.update(exercise_set_params.except(:id))
      else
        new_exercise_set = ExerciseSet.new(exercise_set_params)
        new_exercise_set.workout_id = @workout.id
        new_exercise_set.save
      end
    end
  
    true
  end

  def delete_set_workouts(workout)
    workout.exercise_sets.each do |exercise_set|
      SetWorkout.where(exercise_set_id: exercise_set.id, workout_id: workout.id).destroy_all
    end
  end
end
