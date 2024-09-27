const { default: mongoose, model } = require("mongoose");

const warehouse = mongoose.Schema({
    warehouseName  :{
        required : true,
        type : String
    },
    stateName : {
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

module.exports = mongoose.model("warehouse" ,warehouse )