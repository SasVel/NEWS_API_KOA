const mongoose = require('mongoose');

let date = new Date()
const articleSchema = new mongoose.Schema({
    reporterName: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
        default: `${date.getHours()}:${date.getMinutes()}`
    },
    date: {
        type: String,
        required: true,
        default: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    },
    title: {
        type: String,
        required: true
    },
    tldr: {
        type: String,
    },
    body: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Articles', articleSchema);