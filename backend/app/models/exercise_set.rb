class ExerciseSet < ApplicationRecord
  belongs_to :exercise
  has_many :set_workouts
  has_many :workouts, through: :set_workouts
  has_many :reps

  validates :exercise, :weight, :quantity, presence: true
end