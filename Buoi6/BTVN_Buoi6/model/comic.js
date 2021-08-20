const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('comic', ComicSchema);

