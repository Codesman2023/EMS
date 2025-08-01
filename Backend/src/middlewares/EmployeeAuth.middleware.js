const employeeModel = require('../models/user.Employeemodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await employeeModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await employeeModel.findById(decoded._id);
    
        req.user = user;
        return next();
    }
    catch(err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}