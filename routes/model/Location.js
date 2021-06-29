const mongoose = require("mongoose")

let locationSchema = new mongoose.Schema({
    location:{
        type:String,
        required:true
    },
})


module.exports = mongoose.model('locations', locationSchema)