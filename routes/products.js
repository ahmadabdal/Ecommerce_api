const router = require('express').Router();
const User = require('../models/Product');
const bcrypt = require("bcrypt");
const Product = require('../models/Product');
const { find } = require('../models/Product');
const productsController = require('../controller/productsController');


// Create
router.post("/create", productsController.create);

 // Get All products API with Search
 router.get("/getAllDetails", productsController.getAllProductDetails);


    
    
    module.exports = router;