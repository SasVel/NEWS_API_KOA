const mongoose = require('mongoose');

const gossipSchema = new mongoose.Schema({
    reporterName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: Date.now  
    },
    gossip: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Gossips', gossipSchema);