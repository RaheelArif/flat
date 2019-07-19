let mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/realestate",(err)=>{
    if(err)
    console.log(err)
    else
    console.log("database connected");
})