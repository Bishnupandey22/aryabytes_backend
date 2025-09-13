const Query = require('../Model/query');

// Create a new query
exports.createQuery = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, companyName, message } = req.body;
        const newQuery = new Query({ firstName, lastName, email, phone, companyName, message });
        await newQuery.save();
        res.status(201).json({ message: 'Query created successfully', query: newQuery });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};