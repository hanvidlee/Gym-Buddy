class CreateReps < ActiveRecord::Migration[6.1]
  def change
    create_table :reps do |t|
      t.references :exercise_set, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
