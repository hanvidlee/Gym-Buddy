class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.references :day, null: false, foreign_key: true
      t.text :picture
      t.string :description
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
