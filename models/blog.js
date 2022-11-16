const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//   name: String, 
//   photo: String, 
//   body: String, 
//   date: { type: Date, default: Date.now }
// })

// const groupSchema = new Schema({
//   name :String
// })
// const blogSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     author: String,
//     body:   String,
//     comments: [commentSchema],
//     date: { type: Date, default: Date.now },
//     group: [groupSchema]
//   });

const blogSchema = new Schema({
  title:  String, 
  author: String,
  body:   String,
  comments: String,
  group: String,
  date: { type: Date, default: Date.now }  
});

  const blogInfo = mongoose.model('bloginfo',blogSchema);
  module.exports = blogInfo;