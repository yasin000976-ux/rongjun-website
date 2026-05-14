const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
        res.json({ token, admin });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDashboard = async (req, res) => {
    try {
        res.json({ message: 'Admin dashboard' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};