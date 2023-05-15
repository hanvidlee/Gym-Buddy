class CreateExerciseSets < ActiveRecord::Migration[6.1]
  def change
    create_table :exercise_sets do |t|
      t.integer :exercise_id
      t.integer :weight
      t.integer :quantity
      t.timestamps
    end
  end
end