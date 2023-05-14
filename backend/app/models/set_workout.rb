class SetWorkout < ApplicationRecord
  belongs_to :exercise_set
  belongs_to :workout

  validates :exercise_set, :workout, presence: true
end