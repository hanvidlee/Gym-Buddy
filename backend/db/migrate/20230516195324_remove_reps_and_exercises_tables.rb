class RemoveRepsAndExercisesTables < ActiveRecord::Migration[6.1]
  def change
    drop_table :reps
    drop_table :exercises
    
    add_column :exercise_sets, :exercise, :string
    add_column :exercise_sets, :reps, :integer
  end
end
