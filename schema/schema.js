const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    class: {
        type: Number,
        required: true // Corrected from 'require' to 'required'
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model("Student", studentSchema);