let mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
 
});
 UserSchema = mongoose.model("user", userSchema);
module.exports = UserSchema;
