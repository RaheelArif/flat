let express = require("express");
let messageRoute = express.Router();
let message = require("../config/db/messageModel");
messageRoute.post("/addmessage", (req, res) => {
    let mymessage = new message(req.body);
    mymessage.save((err, message) => {
        if (err)
            res.send({ success: false })
        else
            res.send({ success: true, message: message })
    })
})
messageRoute.post("/getallmessages", (req, res) => {
    message.find({}, (err, messages) => {
        if (err)
            res.send({ success: false })
        else
            res.send({ success: true, messages })
    })
})
module.exports = messageRoute;