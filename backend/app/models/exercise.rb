class Exercise < ApplicationRecord
  has_many :exercise_sets
  has_many :set_workouts, through: :exercise_sets

  validates :name, presence: true
end
