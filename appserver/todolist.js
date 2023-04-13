const Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var dataSchema = new Schema({
  title: {
    type: String,
    required: true, 
    trim: true,
  },
  desc: {
    type: String,
    required: true, 
  },
  checkbox: {
    type: Boolean, 
    default: false 
  }, 
},{
  collection: 'todolist'
});
module.exports = Mongoose.model('todolist',dataSchema ); 
