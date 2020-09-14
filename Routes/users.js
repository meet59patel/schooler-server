const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../Models/User');

// gets all the users list
router.get('/', (req, res, next) => {
  User.find()
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
});

// Add new user
router.post('/', (req, res, next) => {
  const newusr = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.usrname,
    email: req.body.usremail,
    username: req.body.uname,
  });
  newusr
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "New user created!",
        createdUsr: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

// Find user by ID
router.get('/:usrID', (req, res, next) => {
  const id = req.params.usrID;

  User.findById(id)
    .exec()
    .then(doc => {
      console.log("From DB: ", doc);
      if(doc){
        res.status(200).json(doc);
      }else{
        res.status(404).json({message: "No entries found"});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
});

// Delete User by ID
router.delete('/:userID', (req, res, next) => {
  const id = req.params.userID;
  User
    .findByIdAndDelete(id)
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "User deleted successfully!",
        deletedUser: result
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