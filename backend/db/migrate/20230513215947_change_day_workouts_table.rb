class ChangeDayWorkoutsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :day_workouts, :workout
    remove_column :day_workouts, :references
    add_reference :day_workouts, :workout, null: false, foreign_key: true
  end
end
