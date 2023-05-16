class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def show
    @workout = Workout.find(params[:id])
  end
  
  def new
    @workout = Workout.new
  end

  def create
    @workout = Workout.new(workout_params)
    
    if @workout.save
      render json: @workout
    else
      render json: @workout.errors
      puts errors #check what error comes out/how to access
    end
  end
  
  def edit
    @workout = Workout.find(params[:id])
  end

  def update
    @workout = Workout.find(params[:id])

    if @workout.update(workout_params)
      render json: @workout
    else
      render json: @workout.errors
      puts errors #check what error comes out/how to access
    end
  end

  def destroy
    @workout = Workout.find(params[:id])

    @workout.destroy
  end

  private

  def workout_params
    #something needs to be added (exercises?)
    params.require(:workout).permit(:picture, :description) 
  end

end
