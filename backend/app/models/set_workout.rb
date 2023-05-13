class SetWorkout < ApplicationRecord
  belongs_to :exercise_set
  belongs_to :workout
end