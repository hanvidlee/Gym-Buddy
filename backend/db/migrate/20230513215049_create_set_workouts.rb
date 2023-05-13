class CreateSetWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :set_workouts do |t|
      t.references :exercise_set, null: false, foreign_key: true
      t.references :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
