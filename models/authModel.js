const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    // Required Feild
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'teacher', 'student'], default: 'student' },

    // Optional Feild
    phone: { type: Number },
    address: { type: String },
    profilePic: { type: String },
    dob: { type: Date },
    gender: { type: String },
    school: { type: String },
    class: { type: Number },
    section: { type: String },
    teacherID: { type: mongoose.Schema.ObjectId, ref: 'users' },
}, { timestamps: true });

const authModel = mongoose.model('users', authSchema);

module.exports = authModel;