const mongoose = require('mongoose');

// const eventSchema= mongoose.Schema({
//     title:{type: String,required:true},
//     description:{type:String},
//     address:{type:String}


// });

// module.exports = mongoose.model("Event",eventSchema)
module.exports = mongoose.model("Event",{
    title:String,
    description:String,
    address:String,
    date:String,
    private:Boolean,
    username:String
})