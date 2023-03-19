const Cart = require('../models/Cart');

// create
module.exports.create= async (req, res) => {

    
    const newCart = new Cart(req.body);
  
    try {
      const savedCart = await newCart.save();
      return res.status(200).json({savedCart,message:"Added to cart successfully"});
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

//update
  module.exports.update = async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
     return res.status(200).json({updatedCart,message:"cart updated successfully"});
    } catch (err) {
     return res.status(500).json(err);
    }
  }
// delete
module.exports.delete =  async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json("Cart has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
}

//GET USER CART
module.exports.getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    return res.status(200).json({cart, message:"cart displayed successfully"});
  } catch (err) {
    return res.status(500).json({err, message:"internal server error"});
  }
}

// //GET ALL

module.exports.getAllCartDetails = async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json({carts, message:"all cart details displayed successfully"});
  } catch (err) {
    return res.status(500).json({err, message:"internal server error"});
  }
}
