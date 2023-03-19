const Order = require("../models/Order");
//create
module.exports.create = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    return res
      .status(200)
      .json({ savedOrder, message: "order created successfully" });
  } catch (err) {
    return res.status(500).json({ err, message: "internal server error" });
  }
};

//UPDATE
module.exports.update = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ updatedOrder, message: "order updated successfully" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

//DELETE
module.exports.delete = async (req, res) => {
  try {
    let deletedOrder = await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      deletedOrder,
      message: "Order has been deleted...",
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

//GET USER ORDERS
module.exports.getUserCart = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    return res
      .status(200)
      .json({ orders, message: "order displayed successfully" });
  } catch (err) {
    return res.status(500).json({ err, message: "internal server error" });
  }
};

// //GET ALL

module.exports.getAllCartDetails = async (req, res) => {
  try {
    const orders = await Order.find();
    res
      .status(200)
      .json({ orders, message: "all cart details displayed successfully" });
  } catch (err) {
    res.status(500).json({ err, message: "internal server error" });
  }
};
