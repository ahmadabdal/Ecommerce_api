const express = require('express');

const router = express.Router();

router.use("/api/cart", require('./cart'));
router.use("/api/auth", require('./auth'));
router.use("/api/users", require('./users'));
router.use("/api/products", require('./products'));
router.use("/api/orders", require('./orders'));

module.exports = router;