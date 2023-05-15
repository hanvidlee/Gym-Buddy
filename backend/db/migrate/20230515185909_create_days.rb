class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :month
      t.integer :day
      t.integer :year
      t.boolean :empty
      t.timestamps
      t.timestamp :deleted_at
    end
  end
end