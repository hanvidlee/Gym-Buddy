class Rep < ApplicationRecord
  belongs_to :exercise_set

  validates :exercise_set, :quantity, presence: true
end
