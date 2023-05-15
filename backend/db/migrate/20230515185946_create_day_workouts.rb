class CreateDayWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :day_workouts do |t|
      t.integer :day_id
      t.integer :workout_id

      t.timestamps
    end
  end
end
