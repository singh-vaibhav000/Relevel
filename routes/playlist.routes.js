//3rd Party Modules
const { Router } = require('express');

const router = Router();
const {
        create, 
        addSong, 
        } = require('../controllers/playlist.controller.js');

router.post('/create', create);

router.get('/addASong/:playlistId', addSong);

module.exports = router;