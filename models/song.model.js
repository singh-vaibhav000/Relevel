//3rd Party Modules
const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    singer:{
        required:true,
        type:String
    }
});

module.exports = mongoose.model('Song',songSchema);