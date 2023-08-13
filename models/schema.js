const mongoose = require('mongoose');

// data model/structure,
// with simple validaters:
const taskSchema = new mongoose.Schema({
  task: { 
    type: String,
    required: [true, 'cannot pass empty task...'],
    trim: true,
    maxlength: [20, 'task cannot be longer than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Task', taskSchema);