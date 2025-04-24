const express = require('express');
const teacherRoutes = express.Router();
const teacherController = require('../../controllers/teacherController');
const studentController = require('../../controllers/studentController');
const authController = require('../../controllers/authController');
const Auth = require('../../middlewares/auth');

teacherRoutes.use(Auth(['admin','teacher']));

// Dashboard Route
teacherRoutes.get('/dashboard', teacherController.Dashboard);

// Profile Route
teacherRoutes.put('/profile', teacherController.Profile);

// Student Route
teacherRoutes.get('/student', studentController.ViewStudent);
teacherRoutes.get('/student/:_id', studentController.SingleViewStudent);
teacherRoutes.post('/student', authController.Register);
teacherRoutes.put('/student', studentController.Profile);
teacherRoutes.delete('/student/:_id', studentController.DeleteStudent);

module.exports = teacherRoutes;