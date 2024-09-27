const { default: mongoose, model } = require("mongoose");

const user = mongoose.Schema({
    email : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps : true
})

module.exports = mongoose.model("user" , user)