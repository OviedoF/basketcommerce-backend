const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: String,
    email: String,
    typeQuery: String,
    customQuery: String,
    details: String
}, {
    versionKey: false,
    timestamps: true
});

const commentModel = mongoose.model('comment', commentSchema);

module.exports = commentModel;
