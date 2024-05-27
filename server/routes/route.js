const express = require("express");
const { getProducts, uploadproducts } = require("../controller/productsController");
const upload = require("../middleware/multer");
// const upload = require('../config/multer');
const router = express.Router();


router.get("/get-products", getProducts)
router.post('/upload-product', upload.fields([{ name: 'url', maxCount: 1 }, { name: 'detailUrl', maxCount: 1 }]), uploadproducts);

module.exports = router