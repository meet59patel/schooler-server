const mongoose = require("mongoose");

const attendanceSchema = new mongoose.schema({
  _id: mongoose.Schema.Types.ObjectId,
  total_days: { type: Number },
  attended_days: { type: Number },
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
});

module.exports = mongoose.model("Attendance", attendanceSchema);
