class User < ApplicationRecord
  has_many :user_workouts
  has_many :workouts, through: :user_workouts

  validates :name, presence: true
  validates :username, presence: true
  validates :email, presence: true
  validates :password, presence: true, confirmation: true, length: { minimum: 6 }

  has_secure_password
end