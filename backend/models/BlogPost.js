const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    image: String,
    tags: [String],
    published: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);