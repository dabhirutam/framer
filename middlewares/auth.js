const jwt = require('jsonwebtoken');
const authModel = require('../models/authModel');

const Auth = (roles) => async (req, res, next) => {
    try {
        const token = req.header('Authorization').slice(7);
        const decode = jwt.verify(token, 'schoole-web-token');

        if (roles.includes(decode.role)) {
            req.user = await authModel.findById(decode._id);
            if (!req.user) return res.status(401).json({ status: false, message: 'Authentication required.' });
            next();
        } else res.status(401).json({ status: false, message: 'Authentication required.' });

    } catch (err) { return res.status(401).json({ status: false, message: 'Authentication required.' }) };
}

module.exports = Auth 