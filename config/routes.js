const Notes = require("../controllers/notescontroller");

module.exports = function(app) {
    app.get("/notes", (req, res, next) => {
        Notes.create(req, res);

        /* retrieve the notes from the database */
        /* and respond with the notes using 'res.json(notes)' */
    });

    // app.get("/notes/:id", (req, res, next) => {
    //     /* retrieve the note from the database (find the note by the req.params.id)  */
    //     /* and respond with the note using 'res.json(note)' */
    // });

    app.post("/notes", (req, res, next) => {
        console.log("   POST data:  ", req.parameters);
        /* create a note, and respond with a success of failed message */
    });

    // app.put("/notes/:id", (req, res, next) => {
    //     /* update the note (find the note by the req.params.id) */
    //     /* update that note with the posted note found through the req.body */
    //     /* and respond with the updated version of the note */
    // });

    // app.delete("/notes/:id", (req, res, next) => {
    //     /* delete the note (find the note by the req.params.id) */
    //     /* and respond with a success of failed message */
    // });

    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./angularapp/dist/index.html"))
    // }); //catch all does not work! 
}