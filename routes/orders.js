const router = require('express').Router();
const ordersController = require('../controller/ordersController');

//CREATE
router.post("/createOrder", ordersController.create);
//UPDATE
router.post("/update/:id", ordersController.update);
//DELETE
router.delete("/delete/:id", ordersController.delete);
//GET USER CART
router.get("/find/:userId", ordersController.getUserCart);
 // //GET ALL
router.get("/getAllDetails", ordersController.getAllCartDetails);
 


module.exports = router;