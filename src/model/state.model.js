const { default: mongoose, model } = require("mongoose");

const state = mongoose.Schema({
    stateName :{
        required : true,
        type : String
    },
    stateCode : {
        required : true,
        type : String
    },
    status : {
        type : Boolean
    }
},{
    timestamps : true
})

module.exports = mongoose.model("state" ,state )