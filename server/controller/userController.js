const User = require("../models/userModel");

const signupUser = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;
        if (!(username || email || password)) {
            return res.status(403).json({ msg: "Please provide all credentials..." });
        }
        // finding the user wheather is present of not in db .
        const isExist = await User.findOne({ email })
        if (isExist) {
            return res.status(402).json({ msg: "User already exists Please go to sign in " })
        }
        const newUser = await User({ username, email, password })
        return res.status(200).json({msg : "User successfully created ...", newUser})

    } catch (error) {
        return res.status(500).json({ msg: "Something went srong in backend side while sign up the user...." });
    }
}

const signinUser = () => {
    try {

    } catch (error) {

    }
}
module.exports = { signupUser, signinUser }