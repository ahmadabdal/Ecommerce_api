const router = require('express').Router();
const User = require('../models/Cart');
const bcrypt = require("bcrypt");
const cartController = require("../controller/cartController");




//CREATE
router.post("/create", cartController.create);
//UPDATE
router.post("/update/:id", cartController.update);
//DELETE
router.delete("/delete/:id", cartController.delete);
//GET USER CART
router.get("/find/:userId", cartController.getUserCart);

// //GET ALL

router.get("/getAllDetails", cartController.getAllCartDetails);
 
   


module.exports = router;