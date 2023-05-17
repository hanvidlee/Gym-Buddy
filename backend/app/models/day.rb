class Day < ApplicationRecord
  has_many :day_workouts
  has_many :workouts, through: :day_workouts

  validates :month, presence: true
  validates :day, presence: true
  validates :year, presence: true

  before_validation :set_default_empty

  private

  def set_default_empty
    self.empty = true if empty.nil?
  end
end