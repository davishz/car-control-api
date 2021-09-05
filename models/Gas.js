const mongoose = require('mongoose');

const GasSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    liters: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    station: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Gas', GasSchema);