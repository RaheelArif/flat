let mongoose = require("mongoose");
let messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }

});
messageSchema = mongoose.model("message", messageSchema);
module.exports = messageSchema;
