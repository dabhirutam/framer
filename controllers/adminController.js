const authModel = require("../models/authModel");

// Dashboard
const Dashboard = (req, res) => {
    res.status(200).json({ status: true, auth: req.user, msg: "Welcome To Admin dashboard." });
}

// Profile
const Profile = async (req, res) => {
    try {
        await authModel.findByIdAndUpdate(req.user._id, req.body);
        res.status(200).json({ status: true, msg: "Your profile updated successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

module.exports = { Dashboard, Profile }