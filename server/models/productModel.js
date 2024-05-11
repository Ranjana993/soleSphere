// import mongoose from "mongoose";
const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({

    id: { type: String, required: true, unique: true },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    ProductType: String,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
})

const productModel = mongoose.model("productModel", ProductSchema);
module.exports = productModel;