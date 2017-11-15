const express = require('express')
const app = express()
const bp = require('body-parser')
const fs = require('fs')
const path = require('path')
const port = 8000

app.use(express.static(path.join(__dirname, "/angularapp/dist")))
app.use(bp.json())

require("./config/mongoose")
require("./config/routes")(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})