class User < ApplicationRecord
  has_many :user_workouts
  has_many :workouts, through: :user_workouts

  validates :name, :username, :email, presence: true
  validates :password, presence: true, confirmation: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true

  has_secure_password
end