class DayWorkout < ApplicationRecord
  belongs_to :day
  belongs_to :workout

  validates :day, :workout, presence: true
end