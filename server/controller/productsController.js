const productModel = require("../models/productModel")
const path = require("path");

const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json({ products })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong while fetching all products list from database " })
    }
}

// Create a new product
const uploadproducts = async (req, res) => {
    try {
        console.log(req.body);
        const { id, url, detailUrl, title, price, ProductType, quantity, description, discount, tagline } = req.body;

        // URL of the uploaded image
        const imageUrl = req.file;

        const newProduct = new productModel({
            id,
            url: imageUrl,
            detailUrl: req.file,
            title: JSON.parse(title),
            price: JSON.parse(price),
            ProductType,
            quantity,
            description,
            discount,
            tagline
        });

        // await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};



module.exports = { getProducts, uploadproducts } 