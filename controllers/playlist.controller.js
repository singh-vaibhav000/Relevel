const Playlist = require('../models/playlist.model');
const HttpError = require('../models/httpErrors')

const create = async(req, res, next)=>{   
    const {name, songs} = req.body;
    const newPlaylist = Playlist({
        name, 
        songs
    });
    
    try{
        await newPlaylist.save();
    }
    catch{
        const error = new HttpError("Couldn't Create Playlist, Something went wrong.", 500);
        return next(error);
    }

    return res.status(201).json({success:true, data:newPlaylist});
};

const addSong = async(req, res, next)=>{   
    const playlistId = req.params;
    const song = req.body;
    let existingPlaylist;
    try{
        existingPlaylist = await User.findOne({_id:playlistId});
    }
    catch{
        const error =  new HttpError("Couldn't add song, Something went wrong.",500); 
        return next(error);
    }
    if(!existingPlaylist){
        const error = Error("Couldn't add song, Playlist doesn't exists", 400);
        return next(error);
    }

    try{
     existingPlaylist.song = [...existingPlaylist.song, newSong]; 
     await existingPlaylist.save();
    }
    catch{
        const error = Error("Couldn't add song, Something went wrong", 500);
        return next(error);
    }
    return res.status(201).json({success:true, data: existingPlaylist});
};



module.exports = {
    addSong,
    create
}