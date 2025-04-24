const express = require('express');
const authRoutes = require('./subRoutes/authRoutes');
const adminRoutes = require('./subRoutes/adminRoutes');
const teacherRoutes = require('./subRoutes/teacherRoutes');
const studentRoutes = require('./subRoutes/studentRoutes');
const routes = express();

routes.use('/auth', authRoutes);
routes.use('/admin', adminRoutes);
routes.use('/teacher', teacherRoutes);
routes.use('/student', studentRoutes);

module.exports = routes;