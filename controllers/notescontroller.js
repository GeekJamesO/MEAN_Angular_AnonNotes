//create and get all..

const mongoose = require("mongoose");
const Note = mongoose.model("Note");

module.exports = {
    create: (req, res) => {
        Note.create(req.body, function(err, note) {
            if (err) {
                console.log(err);
                return res.json({ status: "error", errors: err })
            } else {
                return res.json({ status: "success", "note": note });
            }
        })
    }
}