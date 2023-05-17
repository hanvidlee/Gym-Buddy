class SetWorkout < ApplicationRecord
  belongs_to :exercise_set
  belongs_to :workout

  validates :exercise_set, presence: true
  validates :workout, presence: true
end