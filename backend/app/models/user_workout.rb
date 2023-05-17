class UserWorkout < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :user, presence: true
  validates :workout, presence: true
end