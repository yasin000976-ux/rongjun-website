const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    productInterest: String,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', inquirySchema);