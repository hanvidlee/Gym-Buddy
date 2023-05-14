class Day < ApplicationRecord
  has_many :day_workouts
  has_many :workouts, through: :day_workouts

  validates :month, :day, :year, presence: true
end
