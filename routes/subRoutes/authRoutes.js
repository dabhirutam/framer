const express = require('express');
const authRoutes = express.Router();
const authController = require('../../controllers/authController');

authRoutes.post('/register', authController.Register);
authRoutes.post('/logIn', authController.LogIn);

module.exports = authRoutes;