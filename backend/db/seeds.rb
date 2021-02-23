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

# 100.times do
#   User.create!(
#     name: Faker::Name.name,
#     email: Faker::Internet.free_email,
#     password_digest: "test",
#     street: "#{Faker::Address.building_number} #{Faker::Address.street_name} #{Faker::Address.street_suffix}",
#     city: Faker::Address.city,
#     province: Faker::Address.state_abbr,
#     post_code: Faker::Address.postcode
#   )
# end

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "100 Queen Street West",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5H 2N1",
  lat: 43.652569,
  lng: -79.383713
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "69 Kensington Avenue",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5T 2K2",
  lat: 43.654419,
  lng: -79.400459
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "431 College Street",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5T 1T1",
  lat: 43.656250,
  lng: -79.407440
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "1 Austin Terrace",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5R 1X8",
  lat: 43.6781015,
  lng: -79.4094158

)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "770 Don Mills Rd",
  city: "North York",
  province: "Ontario",
  post_code: "M3C 1T3 ",
  lat: 43.71767044067383,
  lng: -79.33784484863281
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "290 Bremner Blvd",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5V 3L9",
  lat: 43.641877,
  lng: -79.3862941
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "924 Queen Street West",
  city: "Toronto",
  province: "Ontario",
  post_code: "M6J 1G6",
  lat: 43.6449002,
  lng: -79.4159094
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "147 Spadina Avenue",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5V 2L7",
  lat: 43.6478385925293,
  lng: -79.39608001708984
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "198 Baldwin Street",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5T 1L8",
  lat: 43.65469741821289,
  lng: -79.40111541748047
)

User.create!(
  name: Faker::Name.name,
  email: Faker::Internet.free_email,
  password_digest: "test",
  street: "253 Spadina Avenue",
  city: "Toronto",
  province: "Ontario",
  post_code: "M5T 2E3",
  lat: 43.6424053,
  lng: -79.3938782
)

User.create!(
  name: "Connor",
  email: "connor.mackay@gmail.com",
  password_digest: "$2a$12$z0y7JkhT4hmmMStXriGi4eOt/zEmqdewzBee/Mgt4HzwtRCD.WtjC",
  street: "326 Spadina avenue",
  city: "toronto",
  province: "ontario",
  post_code: "m5t2e7",
  lat: 43.653771,
  lng: -79.398849
)

User.create!(
  name: "Frank",
  email: "Frank@test.com",
  password_digest: "$2a$12$JcDBH439/pkg8oHJpIDSZ.Cm45EABW2EdeqyT47dSO7vFNT7dN3pK",
  street: "test",
  city: "test",
  province: "test",
  post_code: "test123",
  lat: 44.95515049999999,
  lng: -93.37788669999999
)



## TASKS

puts "Re-creating Tasks ..."

Task.destroy_all

Task.create!(
  name: "Shovelling the driveway",
  description: "I need help shovelling my driveway before 2pm today.",
  recipient_id: 6,
)

Task.create!(
  name: "Pick up medication",
  description: "I need someone to pick up my medication because I cannot leave my home.",
  recipient_id: 3,
)

Task.create!(
  name: "Walk my dogs",
  description: "I would like someone to walk my two dogs.",
  recipient_id: 1,
)

Task.create!(
  name: "Gardening",
  description: "I'm looking for someone to help me finish my gardening.",
  recipient_id: 4,
)

Task.create!(
  name: "Need a babysitter",
  description: "I have a meeting to go to on Tuesday evening, and I need someone to watch my 4-year-old.",
  recipient_id: 5,
)

Task.create!(
  name: "Pick up some shoes for me",
  description: "Hi, I'm looking for someone who will buy me a pair of work shoes and then I'll pay them back. Thank you.",
  recipient_id: 2,
)

Task.create!(
  name: "Help preparing a meal",
  description: "I recently broke my arm and I'm looking for some help in preparing a meal for tonight.",
  recipient_id: 5,
)

Task.create!(
  name: "Walk with me in the park",
  description: "I'm just looking for some company to go take a walk with me. Thank you for your consideration.",
  recipient_id: 9,
)

Task.create!(
  name: "Deliver a pizza",
  description: "If anyone is in the area, would you be able to pick up a pizza for me? I'm low on cash and can't afford the extra for delivery. Thank you.",
  recipient_id: 8,
)

Task.create!(
  name: "Speak English with me!",
  description: "I learn to speak English and I love this language! I will love to have a conversation with you!",
  recipient_id: 1,
)

Task.create!(
  name: "guitar lessons",
  description: "can anyone help me with learning guitar?",
  recipient_id: 3,
)

 Task.create!(
  name: "Read me a book",
  description: "My eyesight isn't what it used to be in my younger years. I'd love to have someone come read with me this weekend.",
  recipient_id: 5,
)

# Task.create!(
#   name: "Fix my final project",
#   description: "I took a programming course and I'm too tired for finals",
#   recipient_id: 11,
#   helper_id: 12
# )

# Task.create!(
#   name: "Pick up my mail, I'm in quarantine!",
#   description: "Tested positive for the big Rona, now I can't go get my packages",
#   recipient_id: 11
# )
# Task.create!(
#   name: "First job! Can anyone read my resume?",
#   description: "I don't know what these are supposed to look like",
#   recipient_id: 11,
#   helper_id: 12
# )

# TESTING PURPOSE ONLY

Task.create!(
  name: "Any dog lovers?",
  description: "I need help making an app that connects dog owners, hopefully they can pin their location",
  recipient_id: 11,
  helper_id: 12
)

Task.create!(
  name: "Need someone for removal",
  description: "The morgues are overwhelmed and need help removing a two day old corpse",
  recipient_id: 11
)

Task.create!(
  name: "I am a bad typer",
  description: "I am very slow at typing and need a way to help me type faster",
  recipient_id: 11,
  helper_id: 12
)

# Task.create!(
#   name: "Am I doing yoga correctly?",
#   description: "Can some watch me using their webcam to see if I am performing my yoga poses properly?",
#   recipient_id: 11,
#   helper_id: 12
# )

# Task.create!(
#   name: "My messages are coming too quickly",
#   description: "Messages are being sent too quickly, is there a way to make messages arrive slower?",
#   recipient_id: 11,
#   helper_id: 12
# )

# Task.create!(
#   name: "Planning a trip to mars",
#   description: "My travel agent went out of business due to COVID. Could someone recommend an online alternative? Also could someone tell me the weather information for mars as well?",
#   recipient_id: 11,
#   helper_id: 12
# )

# Task.create!(
#   name: "My pipes burst",
#   description: "Could someone write a ticket to maintenance for me",
#   recipient_id: 11,
#   helper_id: 12
# )
puts "Re-creating Channels"

Channel.destroy_all

Channel.create!(
  name: "Global chat"
)

puts "DONE!"