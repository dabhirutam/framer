const bcrypt = require('bcrypt');
const UserModel = require('../models/authModel');
const jwt = require('jsonwebtoken');

const Register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        // if (!name || !email || !password || !role) return res.status(400).json({ message: "Please fill in all fields" });

        console.log("user", req.body);
        

        if (user) return res.status(500).json({ status: false, msg: "User is allready exist." });

        const userData = new UserModel({
            name,
            email,
            password: await bcrypt.hash(password, 10),
            role
        });
        await userData.save();

        return res.status(200).json({ status: true, msg: "User is created successfully." });

    } catch (err) { console.log("ERR", err);
     return res.status(500).json({ status: false, msg: "Server error." }) };

}

const LogIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!email || !password) return res.status(400).json({ message: "Please fill in all fields" });

        if (!user) return res.status(400).json({ status: false, msg: "User is not found, Please signUp." });

        const verify = await bcrypt.compare(password, user.password);

        if (verify) {
            const token = jwt.sign({ _id: user._id, role: user.role }, 'schoole-web-token');
            res.status(200).json({ status: true, token, msg: "User is login successfully." });
        } else res.status(500).json({ status: false, msg: "Password in not match please enter valid passwod." });

    } catch (err) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

module.exports = { Register, LogIn }