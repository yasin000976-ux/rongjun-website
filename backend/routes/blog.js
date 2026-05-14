const express = require('express');
const router = express.Router();

// GET all blog posts
router.get('/', (req, res) => {
    res.json({ message: 'Get all blog posts' });
});

// GET single blog post
router.get('/:id', (req, res) => {
    res.json({ message: 'Get single blog post' });
});

// POST create blog post
router.post('/', (req, res) => {
    res.json({ message: 'Create blog post' });
});

// PUT update blog post
router.put('/:id', (req, res) => {
    res.json({ message: 'Update blog post' });
});

// DELETE blog post
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete blog post' });
});

module.exports = router;