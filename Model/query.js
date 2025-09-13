const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, phone: {
        type: String,
    },
    companyName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
