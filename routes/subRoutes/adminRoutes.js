const express = require('express');
const adminRoutes = express.Router();
const adminController = require('../../controllers/adminController');
const authController = require('../../controllers/authController');
const teacherController = require('../../controllers/teacherController');
const studentController = require('../../controllers/studentController');
const Auth = require('../../middlewares/auth');

// adminRoutes.use(Auth(['admin']));

// Dashboard Route
adminRoutes.get('/dashboard', adminController.Dashboard);

// Profile Route
adminRoutes.put('/profile', adminController.Profile);

// Teacher Route
adminRoutes.get('/teacher', teacherController.ViewTeacher);
adminRoutes.get('/teacher/:_id', teacherController.SingleViewTeacher);
adminRoutes.post('/teacher', authController.Register);
adminRoutes.put('/teacher', teacherController.Profile);
adminRoutes.delete('/teacher/:_id', teacherController.DeleteTeacher);

// Student Route
adminRoutes.get('/student', studentController.ViewStudent);
adminRoutes.get('/student/:_id', studentController.SingleViewStudent);
adminRoutes.post('/student', authController.Register);
adminRoutes.put('/student', studentController.Profile);
adminRoutes.delete('/student/:_id', studentController.DeleteStudent);

module.exports = adminRoutes;