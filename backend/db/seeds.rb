# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Faker::Config.locale = "en-CA"

puts "Seeding Data ..."

## USERS

puts "Re-creating Users ..."

User.destroy_all

100.times do
  User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.free_email,
    password: "test",
    street: "#{Faker::Address.building_number} #{Faker::Address.street_name} #{Faker::Address.street_suffix}",
    city: Faker::Address.city,
    province: Faker::Address.state_abbr,
    post_code: Faker::Address.postcode
  )
end

puts "DONE!"