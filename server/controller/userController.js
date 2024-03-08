const User = require("../models/userModel");

const signupUser = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(403).json({ msg: "Please provide all credentials..." });
        }

        // Finding if the user already exists in the database
        const isExist = await User.findOne({ email });

        if (isExist) {
            return res.status(402).json({ msg: "User already exists. Please go to sign in." });
        }

        // Create a new user instance with the User model
        const newUser = new User({ username, email, password });

        // Save the new user to the database
        await newUser.save();

        return res.status(200).json({ msg: "User successfully created...", newUser });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ msg: "Something went wrong on the backend side while signing up the user." });
    }
};

const signinUser = () => {
    try {

    } catch (error) {

    }
}
module.exports = { signupUser, signinUser }