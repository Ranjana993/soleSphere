const seller = require("../models/sellerModel");
const uploadOnCloudinary = require("../config/cloudinary");
const productModel = require("../models/productModel")
const fs = require('fs');

// getting all products
const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json({ products })
    }
    catch (error) {
        return res.status(500).json({ message: "something went wrong while fetching all products list from database " })
    }
}

// getting products by id 
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id); 

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ product });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Create a new product
const uploadproducts = async (req, res) => {
    try {
        // Destructure the incoming form data
        const { id, title, price, ProductType, quantity, description, discount, tagline } = req.body;

        //check duplicate product
        let isExist = await productModel.findOne({ id: id })
        if (isExist) {
            return res.status(400).json({ error: 'This product is already exists' });
        }
        // Get the uploaded files
        const urlFile = req.files['url'] ? req.files['url'][0] : null;
        const detailUrlFile = req.files['detailUrl'] ? req.files['detailUrl'][0] : null;

        if (!urlFile || !detailUrlFile) {
            return res.status(400).json({ error: 'Both url and detailUrl files are required' });
        }

        // Upload files to Cloudinary
        const urlImageUrl = await uploadOnCloudinary(urlFile.path);
        const detailUrlImageUrl = await uploadOnCloudinary(detailUrlFile.path);

        if (!urlImageUrl || !detailUrlImageUrl) {
            return res.status(500).json({ error: 'Failed to upload images to Cloudinary' });
        }

        // Create new product with the URL from Cloudinary
        const newProduct = new productModel({
            id,
            url: urlImageUrl,
            detailUrl: detailUrlImageUrl,
            title: JSON.parse(title),
            price: JSON.parse(price),
            ProductType,
            quantity,
            description,
            discount,
            tagline
        });
        await newProduct.save();
        res.status(201).json({ message: "Product has been successfully uploaded ", newProduct });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
    finally {
        if (req.file && req.file.path) {
            fs.unlinkSync(req.file.path);
        }
    }
};


// getting product according to user registered as a seller ...
const userProductController = async (req, res) => {
    try {
        const userProduct = await seller.findById(req.params.id).populate("productModel");
        if (!userProduct) {
            return res.status(401).send({ success: false, message: "Not found" })
        }

        return res.status(200).send({ success: true, message: "Products found", userProduct })
    } catch (error) {
        console.log(error);
        return res.status(400).send({ success: false, message: "Errror in userProductController", error })
    }
}



module.exports = { getProducts, uploadproducts, userProductController, getProductById } 