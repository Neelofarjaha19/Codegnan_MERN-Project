const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    qno: { type: Number, required: true },
    question: { type: String, required: true },
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: true },
    option4: { type: String, required: true },
}, {
    timestamps: true,
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = { Poll };