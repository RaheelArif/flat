let express = require("express");
let bidRoute = express.Router();
let bid = require("../config/db/bidModel");
bidRoute.post("/addbid", (req, res) => {
    let mybid = new bid(req.body);
    mybid.save((err, bid) => {
        if (err)
            res.json({ success: false })
        else
            res.json({ success: true, bid: bid })
    })
})
bidRoute.post("/getallbids", (req, res) => {
    bid.find({ property: req.body.property }, (err, bids) => {
        if (err)
            res.json({ success: false })
        else
            res.json({ success: true, bids })
    })
})
module.exports = bidRoute;