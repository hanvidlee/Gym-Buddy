class Day < ApplicationRecord
  has_many :day_workouts
  has_many :workouts, through: :day_workouts

  validates :month, presence: true
  validates :day, presence: true
  validates :year, presence: true
  validates :empty, default: true
end