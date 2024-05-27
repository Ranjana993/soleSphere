// const products = require("./config/data");
const productModel = require("./models/productModel");
const products = require("./config/data")

const uploadData = async () => {
    try {
        await productModel.insertMany(products);
        console.log("Product Saved successfully")
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = uploadData;