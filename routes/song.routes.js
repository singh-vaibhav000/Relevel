//3rd Party Modules
const { Router } = require('express');

const router = Router();
const {
        browseAll, 
        create, 
        } = require('../controllers/song.controller.js');

router.get('/', browseAll);

router.post('/create', create);

module.exports = router;