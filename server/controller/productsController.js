const uploadFile = require("../helper/upload");
const productModel = require("../models/productModel")


const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json({ products })
    } catch (error) {
        return res.status(500).json({ message: "something went wrong while fetching all products list from database " })
    }
}

const uploadproducts = async (req, res) => {
    try {
        const {  title, price, ProductType, quantity, description, discount, tagline } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: 'chhose your image file' });
        }
        if(!description || !price || !title || !quantity){

        }
        const uploadedImageURL = await uploadFile(req.file.path)
        console.log("uploadedImageURL", uploadedImageURL);




        res.status(200).json({
            url: secure_url
        });

    } catch (error) {

    }
}

module.exports = { getProducts, uploadproducts } 