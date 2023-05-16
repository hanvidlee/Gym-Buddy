class DayWorkout < ApplicationRecord
  belongs_to :day
  belongs_to :workout

  validates :day, presence: true
  validates :workout, presence: true
end