class CreateSetWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :set_workouts do |t|
      t.integer :exercise_set_id
      t.integer :workout_id

      t.timestamps
    end
  end
end
