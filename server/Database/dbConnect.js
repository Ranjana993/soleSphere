const mongoose = require("mongoose")

const connectDB = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/shoe-store");
        console.log("successfully connected to MongoDB ");
    } catch (error) {
        console.log(error);
    }
}    

module.exports = connectDB