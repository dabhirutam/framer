const express = require('express');
const studentRoutes = express.Router();
const studentController = require('../../controllers/studentController');
const Auth = require('../../middlewares/auth');

studentRoutes.use(Auth(['admin','teacher','student']));

// Dashboard Route
studentRoutes.get('/dashboard', studentController.Dashboard);

// Profile Route
studentRoutes.put('/profile', studentController.Profile);

module.exports = studentRoutes;