class ExerciseSet < ApplicationRecord
  has_many :set_workouts
  has_many :workouts, through: :set_workouts

  validates :weight, presence: true
  validates :quantity, presence: true
  validates :exercise, presence: true
  validates :reps, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end