const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

// auth
const auth = require("../auth/auth.js");

// schema
const userSchema = require("../schema/schema.js");

// router 

const router = new express.Router();

router.use(bodyparser.urlencoded({ extended: true }));
router.use(bodyparser.json());
router.use(cors());



router.post("/register", async (req, res) => {
    const username = req.body.username;
    const user = await userSchema.findOne({ username: username });
    if (user) {
        res.status(400).send({
            message: "User already exist"
        })
    }
    else {
        try {
            const data = await new userSchema({
                username: req.body.username,
                password: req.body.password
            })
            await data.save()
            res.status(200).send({
                status: 1,
                data: data
            })
        }
        catch (err) {
            res.status(401).send({
                message: err.message
            })
        }
    }
})

router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const loginUserData = await userSchema.findOne({ username: username });
    if (loginUserData) {
        const checkPassword = await bcrypt.compare(password, loginUserData.password);
        if (checkPassword) {
            // console.log("login successfully")
            const token = await loginUserData.generateAuthToken();

            res.status(200).send({
                status: 1,
                token: token,
                user: loginUserData
            })
        }
        else {
            res.status(500).send({
                status: 500,
                message: "Invalid Credential"
            })
        }
    }
    else {
        res.status(500).send({
            status: 500,
            message: "Invalid Credential"
        })
    }
})

router.post("/logout", auth, async (req, res) => {
    try {
        req.user.tokens = [];
        req.user.save();

        res.status(200).send({
            message: "logout Successfully"
        })
    }
    catch (err) {
        res.status(501).send({
            msg: "error in logout",
            err: err.message
        })
    }
})

router.put("/book", auth, async (req, res) => {
    try {
        const user = req.user;
        user.books.push({
            book: {
                title: req.body.title,
                isbn: req.body.isbn,
                author: req.body.author,
                description: req.body.desc,
                pubDate: req.body.pubDate,
                pub: req.body.pub
            }
        })
        await user.save();
    }
    catch (err) {
        console.log(err.message)
    }
})

router.get("/book", async (req, res) => {
    try {
        const users = await userSchema.find({}, "books.book");
        res.status(200).send({
            data: users
        })
    } catch (err) {
        res.send(err.message)
    }
})
router.get("/", (req, res) => {
    res.send("Hello Yash")
})

module.exports = router;