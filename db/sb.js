const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/basic',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{
    console.log("sucessful connection");
})
.catch((error) => {
    console.error("Connection error:", error);
})