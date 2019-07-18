let mongoose = require("mongoose");
let propertySchema = mongoose.Schema({
    title: String,
    price: {
        type: Number
    },
    description: {
        type: String,
    },
    file: {
        type: String,
    },
    bedrooms: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    purpose: {
        type: String,
    },
    city: {
        type: String
    },
    timeLimit: {
        type: Number
    },
    date: {
        type: Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    approved: {
        type: Boolean
    }


});
propertySchema = mongoose.model("property", propertySchema);
module.exports = propertySchema;