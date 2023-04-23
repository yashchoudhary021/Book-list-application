const userSchema = require('../schema/schema.js')
const jwt = require("jsonwebtoken")

const auth = async (req, res, next) => {
    try {
        let token = req.body.token;
        const verifyUser = jwt.verify(token, "yashskjdfniskdnfiosldnfkissdnfks");
        if (!verifyUser) {
            res.sendStatus(200);
        }
        const user = await userSchema.findOne({_id: verifyUser._id});
        req.token = token;
        req.user = user;
        next();
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            message: err.message
        })
    }
}

module.exports = auth;