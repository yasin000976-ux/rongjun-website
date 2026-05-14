const express = require('express');
const router = express.Router();

// POST admin login
router.post('/login', (req, res) => {
    res.json({ message: 'Admin login' });
});

// GET admin dashboard
router.get('/dashboard', (req, res) => {
    res.json({ message: 'Admin dashboard' });
});

// POST admin logout
router.post('/logout', (req, res) => {
    res.json({ message: 'Admin logout' });
});

module.exports = router;