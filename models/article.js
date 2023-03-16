const mongoose = require('mongoose');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

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
        type: Date,
        required: true,
        default: dayjs().local().format()
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