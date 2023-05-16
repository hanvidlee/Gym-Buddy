class Api::RepsController < ApplicationController
  def index
    @reps = Rep.all
    render json: @reps
  end

  def show
    @rep = Rep.find(params[:id])
    render json: @rep
  end

  def new
    @rep = Rep.new
  end

  def create
    @rep = Rep.new(rep_params)

      if @rep.save
        render json: @rep
      else
        render json: @rep.errors
  end

  def edit
    @rep = Rep.find(params[:id])
    render json: @rep
  end

  def update
    @rep = Rep.find(params[:id])

    if @rep.update(rep_params)
      render json: @rep
    else
      render json: @rep.errors #check what error comes out/how to access
    end
  end

  def destroy
    @rep = Rep.find(params[:id])
    @rep.destroy

  end

  private

  def rep_params
    params.require(:rep).permit(:quantity)
  end
end
