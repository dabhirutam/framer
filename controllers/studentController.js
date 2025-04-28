const authModel = require("../models/authModel");

// Dashboard
const Dashboard = (req, res) => {
    res.status(200).json({ status: true, auth: req.user, msg: "Welcome To Student dashboard." });    
}

// Profile
const Profile = async (req, res) => {
    try {
        await authModel.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ status: true, msg: "Your profile updated successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}


// // Only Admin can access Student
const ViewStudent = async (req, res) => {
    try {
        //res.status(200).json({ status: true, students: await authModel.find({ role: "student" }).populate('teacherID') });
        res.send(await authModel.find({ role: "student" }));
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const SingleViewStudent = async (req, res) => {
    try {
        res.status(200).json({ status: true, student: await authModel.findById(req.params._id).populate('teacherID') || "Not found" });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const DeleteStudent = async (req, res) => {
    try {
        await authModel.findByIdAndDelete(req.params._id);
        res.status(200).json({ status: true, msg: "Student deleted successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

module.exports = { Dashboard, Profile, ViewStudent, SingleViewStudent, DeleteStudent }
