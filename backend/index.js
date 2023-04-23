const express = require("express")
const PORT = 8080;
const app = express();

// collection 
require("./mongodb/connection.js")

// middlewere
app.use(express.json())

const router = require('./router/route.js')
app.use(router)

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Your Application is working on", PORT)
})