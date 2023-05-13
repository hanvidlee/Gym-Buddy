class CreateDayWorkout < ActiveRecord::Migration[6.1]
  def change
    create_table :day_workouts do |t|
      t.references :day, null: false, foreign_key: true
      t.string :workout
      t.string :references

      t.timestamps
    end
  end
end
