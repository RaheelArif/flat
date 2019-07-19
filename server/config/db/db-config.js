let mongoose=require("mongoose");
mongoose.connect("mongodb://wajid:wajid12345@ds251877.mlab.com:51877/project1",(err)=>{
    if(err)
    console.log(err)
    else
    console.log("database connected");
})