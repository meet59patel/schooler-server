const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  subjectName: String,
  profName: String,
  courseCode: String,
  notes: String,
  assignments: {
    type: [
      {
        dueDate: { type: Date },
        title: String,
        description: String
      }, 
    ],
  }
});

module.exports = mongoose.model('Course', courseSchema);