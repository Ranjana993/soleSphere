const products = require("./config/data");

const uploadData = async () => {
    try {
        // await Productmodel.deleteMany({});
        await Productmodel.insertMany(products);
        console.log("Product Saved (imported) successfully")
    } catch (error) {
        console.log(error.message);
    }
}

module.exports= uploadData;