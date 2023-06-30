const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/men100m").then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log(err);
})
