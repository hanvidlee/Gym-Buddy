class Workout < ApplicationRecord
  has_many :day_workouts
  has_many :days, through: :day_workouts
  has_many :set_workouts
  has_many :exercise_sets, through: :set_workouts
  has_many :user_workouts
  has_many :users, through: :user_workouts

  validates :picture, :description, presence: true
end
