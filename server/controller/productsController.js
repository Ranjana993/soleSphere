const productModel = require("../models/productModel")


const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        // console.log(products);
        return res.status(200).json({ products })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong while fetching all products list from database " })
    }
}

module.exports = getProducts 