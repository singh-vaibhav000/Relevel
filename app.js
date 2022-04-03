//3rd Party Modules
const express = require('express');
const mongoose = require('mongoose');

const HttpError = require('./models/httpErrors');
const usersRoutes = require('./routes/user.routes.js');
const playlistRoutes = require('./routes/playlist.routes.js');
const songRoutes = require('./routes/song.routes.js');

const app = express();
app.use(express.json());

app.use('/api/users',usersRoutes);
app.use('/api/playlists',playlistRoutes);
app.use('/api/songs',songRoutes);

app.use((req, res, next)=>{
    const error = new HttpError("Couldn't Find this Route", 404);
    throw error; 
});

mongoose.connect(`mongodb+srv://achintya:${`achintya`}@cluster0.7etfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Active Connection To Database Established!");
})
.catch((error)=>{
    console.log(error);
    console.log("A error has been occurred while connecting to database, Sorry for inconvenience !!");
});

module.exports = app;
