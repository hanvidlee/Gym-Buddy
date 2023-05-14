class UserWorkout < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :user, :workout, presence: true
end