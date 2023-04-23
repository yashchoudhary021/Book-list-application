const mongoose = require("mongoose");
const url = "mongodb+srv://root:yashyash@cluster0.djej1bs.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB is connected successful")
    }).catch((err) => {
        console.log("failed to connect mongodb Atlus")
    })