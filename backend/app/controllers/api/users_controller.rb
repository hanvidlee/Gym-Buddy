require('faker')

class Api::UsersController < ApplicationController
  # index, create, new, update, edit, destroy
  3.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password)
  end
end
