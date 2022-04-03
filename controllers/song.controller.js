const Song = require('../models/song.model');
const HttpError = require('../models/httpErrors')

const create = async(req, res, next)=>{   
    const {name, singer}  = req.body;
    const newSong = Song({
        name, 
        singer
    });
    
    try{
        await newSong.save();
    }
    catch{
        const error = new HttpError("Couldn't Create song, Something went wrong.", 500);
        return next(error);
    }

    return res.status(201).json({success:true, data:newSong});
};

const browseAll = async(req, res, next)=>{   
    let allSongs;
    try{
        allSongs = await Song.find();
    }
    catch{
        const error =  new HttpError("Couldn't Get Songs, Something went wrong.",500); 
        return next(error);
    }
    return res.status(201).json({success:true, data: allSongs});
};

module.exports = {
    browseAll,
    create
}