class DayWorkout < ApplicationRecord
  belongs_to :day
  belongs_to :workout
end