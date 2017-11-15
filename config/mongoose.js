const mongoose = require("mongoose"),
    fs = require("fs"),
    path = require("path");

mongoose.connect("mongodb://localhost/anonymousnotes");

const modulesPath = path.join(__dirname, "../models");

fs.readdirSync(modulesPath).forEach((file) => {
    if (file.indexOf(".js") >= 0) {
        require(modulesPath + "/" + file);
    }
})