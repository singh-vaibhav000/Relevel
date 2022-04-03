//3rd Party Modules
const mongoose = require('mongoose');
const playlistSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    songs: [mongoose.Types.ObjectId],
});

module.exports = mongoose.model('Playlist',playlistSchema);