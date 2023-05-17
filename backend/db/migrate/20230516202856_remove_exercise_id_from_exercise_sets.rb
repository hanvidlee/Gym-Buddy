class RemoveExerciseIdFromExerciseSets < ActiveRecord::Migration[6.1]
  def change
    remove_column :exercise_sets, :exercise_id
  end
end