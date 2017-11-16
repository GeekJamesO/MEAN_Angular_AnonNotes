const mongoose = require("mongoose"),
    fs = require("fs"),
    path = require("path");

console.log("running Mongoose.js *****************************************************************");
mongoose.connect("mongodb://localhost/anonymousnotes:27017");

const modulesPath = path.join(__dirname, "./../models");

fs.readdirSync(modulesPath).forEach((file) => {
    if (file.indexOf(".js") >= 0) {
        console.log("This model being imported is::::::", file);
        require(modulesPath + "/" + file);
    }
})