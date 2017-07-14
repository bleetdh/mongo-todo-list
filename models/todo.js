// Mongoose Schema and Models goes here
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)
// with this, we can CRUD movie

module.exports = Todo
