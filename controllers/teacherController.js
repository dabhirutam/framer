const authModel = require("../models/authModel");

// Dashboard
const Dashboard = (req, res) => {
    res.status(200).json({ status: true, auth: req.user, msg: "Welcome To Teacher dashboard." });
}

// Profile
const Profile = async (req, res) => {
    try {
        await authModel.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ status: true, msg: "Your profile updated successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}


// Only Admin can access Teacher
const ViewTeacher = async (req, res) => {
    try {
        res.status(200).json({ status: true, teachers: await authModel.find({ role: "teacher" }) });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const SingleViewTeacher = async (req, res) => {
    try {
        res.status(200).json({ status: true, teacher: await authModel.findById(req.params._id) || "Not found" });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const DeleteTeacher = async (req, res) => {
    try {
        await authModel.findByIdAndDelete(req.params._id);
        res.status(200).json({ status: true, msg: "Teacher deleted successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

module.exports = { Dashboard, ViewTeacher, SingleViewTeacher, Profile, DeleteTeacher }