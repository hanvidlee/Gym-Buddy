class ChangeWorkoutsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :workouts, :day_id
  end
end
