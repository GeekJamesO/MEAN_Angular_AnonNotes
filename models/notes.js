const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 3 },
}, { timestamps: true });

mongoose.model("Note", NotesSchema);