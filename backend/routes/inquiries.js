const express = require('express');
const router = express.Router();

// GET all inquiries
router.get('/', (req, res) => {
    res.json({ message: 'Get all inquiries' });
});

// GET single inquiry
router.get('/:id', (req, res) => {
    res.json({ message: 'Get single inquiry' });
});

// POST create inquiry
router.post('/', (req, res) => {
    res.json({ message: 'Create inquiry' });
});

// PUT update inquiry
router.put('/:id', (req, res) => {
    res.json({ message: 'Update inquiry' });
});

// DELETE inquiry
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete inquiry' });
});

module.exports = router;