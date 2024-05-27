const seller = require("../models/sellerModel");
const uploadOnCloudinary = require("../config/cloudinary");
const productModel = require("../models/productModel")
const fs = require('fs');

const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json({ products })
    } 
    catch (error) {
        return res.status(500).json({ message: "something went wrong while fetching all products list from database " })
    }
}

// Create a new product


const uploadproducts = async (req, res) => {
    try {
        // Destructure the incoming form data
        const { id, title, price, ProductType, quantity, description, discount, tagline } = req.body;

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

        // Save the product to the database
        await newProduct.save();


        res.status(201).json({ message: "Product has been successfully uploaded ", newProduct });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Product could not be created" });
    }
    finally {
        // Clean up the temporary file
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



module.exports = { getProducts, uploadproducts, userProductController } 