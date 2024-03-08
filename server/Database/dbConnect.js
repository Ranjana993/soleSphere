const mongoose = require("mongoose");

const user_name = process.env.USERNAME;
const password = process.env.PASSWORD;

const URL = `mongodb+srv://Ranjana996:${password}@shoestore.kechpu9.mongodb.net/ShoeStore`;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectDB;
