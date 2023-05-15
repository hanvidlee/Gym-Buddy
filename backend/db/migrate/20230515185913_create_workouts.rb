class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :picture
      t.string :description
      t.timestamp :deleted_at
      t.timestamps
    end
  end
end
