class CreateReps < ActiveRecord::Migration[6.1]
  def change
    create_table :reps do |t|
      t.integer :exercise_set_id
      t.integer :quantity

      t.timestamps
    end
  end
end
