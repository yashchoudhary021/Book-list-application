const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userData = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    books: [{
        book:{
            title: String,
            isbn: String,
            author: String,
            description: String,
            pubDate: String,
            pub: String
        }
    }], 
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userData.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id: this.id.toString()}, "yashskjdfniskdnfiosldnfkissdnfks");
        this.tokens = this.tokens.concat({token: token})
        await this.save();
        return token;
    }
    catch (err){
        console.log(err)
        res.status(500).send(err);
    }
}

// hash Password

userData.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10); // salt value = 10;
        next();
    }
    next();
})

const userSchema = new mongoose.model("booklist", userData);

module.exports = userSchema;