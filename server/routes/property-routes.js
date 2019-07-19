let express = require("express");
let propertyRoute = express.Router();
let property = require("../config/db/propertyModel");
let upload = require("../config/multer/multer")
propertyRoute.post("/addproperty", upload.single('image'), (req, res) => {
    if (req.file) {
        let myproperty = new property(req.body);
        myproperty.file = "/static/" + req.file.filename
        if(req.body.user)
        myproperty.user=JSON.parse(req.body.user)
        myproperty.save((err, property) => {
            if (err)
                res.json({ success: false })
            else
                res.json({ success: true, property: property })
        })
    }
    else
        res.json({ success: false })
})
propertyRoute.post("/getallproperty", (req, res) => {
    property.find({ approved: true }, (err, properties) => {
        if (err)
            res.json({ success: false })
        else
            res.json({ success: true, properties:properties })
    })
})
propertyRoute.post("/getall", (req, res) => {
    property.find({}, (err, properties) => {
        if (err)
            res.json({ success: false })
        else
            res.json({ success: true, properties })
    })
})
propertyRoute.delete("/deleteproperty", (req, res) => {
    property.findByIdAndDelete(req.body._id, (err, property) => {
        if (err)
            res.json({ success: false })
        else
            res.json({ success: true, property: property })
    })
})
propertyRoute.put("/editproperty", (req, res) => {
    property.findByIdAndUpdate(req.body._id, req.body, (err, property) => {
        if (err)
            res.json({ success: false })
        else
            res.json({ success: true, property: property })
    })
})
module.exports = propertyRoute;