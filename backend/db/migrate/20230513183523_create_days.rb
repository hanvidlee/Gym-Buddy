class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :month
      t.integer :day
      t.integer :year
      t.boolean :empty
      t.datetime :deleted_at

      t.timestamps
    end
  end
end
