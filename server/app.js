const express = require("express");
require("dotenv").config();
const cors = require("cors");
const  uploadData  = require("./uploadingDataToDB");
const connectDB = require("./Database/dbConnect");
const productRoute = require("./routes/route");
const router = require("./routes/userRoute");



const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("/", productRoute)
app.use("/" , router)

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to backend side ....</h1>")
})

app.listen(PORT , () => console.log(`server is running on http://localhost:${PORT}`))

connectDB();
uploadData()