const User = require("../models/userModel");
const bcrypt = require("bcrypt")

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
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with the User model
        const newUser = await new User({ username, email, password: hashedPassword }).save();
        console.log(newUser);
        // Save the new user to the database
        // await newUser.save();

        return res.status(200).json({ msg: "User successfully created...", newUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Something went wrong on the backend side while registering up the user." });
    }
};

const signinUser = async() => {
    try {
        const { email, password } = req.body;
        if(!(email , password)){
            return res.status(403).json({ msg: "User not found please register"})
        }
        const existingUser = await User.findOne({email})
        const encryptedPassword = await bcrypt.compare(password, existingUser._id )
        if (!encryptedPassword){
            return res.status(403).json({ msg: "Invalid credentials"})
        }

    } catch (error) {
        console.error(error); 
        return res.status(500).json({ msg: "Something went wrong on the backend side while signing up the user." });
    }
}
module.exports = { signupUser, signinUser }