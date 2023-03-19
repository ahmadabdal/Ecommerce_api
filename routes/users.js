const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const usersController = require('../controller/usersController');

//update
router.post("/update/:id", usersController.update);

 module.exports = router;
    