const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Mongo-Todo-List'
// connect to mongo
mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise
// TODO. import TODO Model ;-)
const Todo = require('../models/todo')

function create (params) {
  // create a new TODO and console log the response
  var {name, description, completed} = params
  var newTodo = new Todo({
    name: name,
    description: description,
    completed: completed
  })
  newTodo.save(function (err, data) {
    if (err) throw err

    console.log('new todo created')
    console.log(data)
  })
}

function list () {
  // console log the list of all TODOs
  Todo.find({}, function (err, data) {
    if (err) throw err

    console.log(data)
  })
}
function show (id) {
  // find the TODO with this id and console log it
  Todo.findOne({_id: id}, function (err, data) {
    if (err) throw err

    console.log(data)
  })
}
function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  var {name, description, completed} = params

  var toUpdateTo = {
    name: name,
    description: description,
    completed: completed
  }
  Todo.findOneAndUpdate({_id: id}, toUpdateTo, function (err, data) {
    if (err) throw err
    console.log(data)
  })
}
function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  Todo.findOneAndRemove({_id: id}, function (err, removedData) {
    if (err) throw err
    console.log(removedData)
  })
}

function destroyAll () {
  Todo.remove({}, function (err,data) {
    if (err) throw err
    console.log('EVERYTHING DESTROYED');
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
