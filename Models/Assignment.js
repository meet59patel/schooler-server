const mongoose = require("mongoose");

const assignmentSchema = new mongoose.schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String },
  description: { type: String },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  links: { type: Array, default: [] },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
