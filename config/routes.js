const Notes = require("../controllers/notescontroller");

module.exports = function(app) {
    app.post("/New", function(req, res) {
            Notes.create(req, res);
        })
        // 	, 
        // 	app.get("/all", function(req, res) {
        // 		Notes.create(req, res); 
        // 	});
}