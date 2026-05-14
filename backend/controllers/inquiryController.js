const Inquiry = require('../models/Inquiry');

exports.getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find();
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);
        res.json(inquiry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createInquiry = async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        await inquiry.save();
        res.status(201).json(inquiry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(inquiry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteInquiry = async (req, res) => {
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.json({ message: 'Inquiry deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};