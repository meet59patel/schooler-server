const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Course = require('../Models/Course');
const User = require('../Models/User');

// gets all the Courses list
router.get('/', (req, res, next) => {
  Course.find()
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Find course by ID
router.get('/:courseID', (req, res, next) => {
  const id = req.params.courseID;
  Course.findById(id)
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Add new course
router.post('/', (req, res, next) => {
  const newCourse = new Course({
    _id: new mongoose.Types.ObjectId(),
    creator: req.body.creator,
    subjectName: req.body.subjectName,
    profName: req.body.profName,
    courseCode: req.body.courseCode
  });

  newCourse
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "New course created!",
        createdCourse: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// Delete course by ID
router.delete('/:courseID', (req, res, next) => {
  const id = req.params.courseID;
  Course
    .findByIdAndDelete(id)
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Course deleted successfully!",
        deletedCourse: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;