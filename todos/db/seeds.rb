# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do 
  Todo.destroy_all 

  Todo.create(title: 'todo 1', body: 'todo 1 body')
  Todo.create(title: 'todo 2', body: 'todo 2 body')
  Todo.create(title: 'todo 3', body: 'todo 3 body')
end