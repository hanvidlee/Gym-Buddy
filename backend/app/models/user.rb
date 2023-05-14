class User < ApplicationRecord
  has_many :user_workouts
  has_many :workouts, through: :user_workouts

  validates :name, :username, :email, :password, presence: true
end
