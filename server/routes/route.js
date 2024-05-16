const express = require("express");
const { getProducts, uploadproducts } = require("../controller/productsController");
const multer = require("multer")
const router = express.Router();


const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 }
})


router.get("/get-products", getProducts)
router.post('/upload-product', uploader.single('image'), uploadproducts);
module.exports = router