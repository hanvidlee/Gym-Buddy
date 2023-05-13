require('faker') 

# create users
3.times do
  User.create(name: Faker::Name.name, username: Faker::Internet.username, email: Faker::Internet.email, password: Faker::Internet.password)
end