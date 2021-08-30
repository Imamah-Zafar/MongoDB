const mongoose = require('mongoose');
const modelName = 'Posts';

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
}, { collection: modelName });

module.exports = mongoose.model(modelName, schema);