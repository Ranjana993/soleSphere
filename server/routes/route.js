const express = require("express");
const { getProducts, uploadproducts } = require("../controller/productsController");
const upload = require('../config/multer');
const router = express.Router();





router.get("/get-products", getProducts)
router.post('/upload-product', upload.single('image'), uploadproducts);
module.exports = router