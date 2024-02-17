const express = require("express");
require("dotenv").config();
const cors = require("cors");



const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to backend side ....</h1>")
})

app.listen(PORT , () => console.log(`server is running on http://localhost:${PORT}`))