const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, "The todo text is required..."]
  }
});

// model
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
