const { default: mongoose, model } = require("mongoose");

const cities = mongoose.Schema({
    stateName :{
        required : true,
        type : String
    },
    cityCode : {
        required : true,
        type : String
    },
    cityName : {
        required : true,
        type : String
    },
    status : {
        type : Boolean
    }
},{
    timestamps : true
})

module.exports = mongoose.model("cites" ,cities )