let mongoose = require("mongoose");
let bidSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  property:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"property"
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user',
  }
 
});
 bidSchema = mongoose.model("bid", bidSchema);
module.exports = bidSchema;
