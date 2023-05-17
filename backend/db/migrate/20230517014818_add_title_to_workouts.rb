class AddTitleToWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :workouts, :title, :string
  end
end
