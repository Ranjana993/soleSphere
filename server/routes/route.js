const express = require("express" );
const getProducts = require("../controller/productsController");
const router =  express.Router();

// get all products list from database ....
router.get("/get-products" ,getProducts)

module.exports = router