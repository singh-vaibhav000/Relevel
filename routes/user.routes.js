//3rd Party Modules
const { Router } = require('express');

const router = Router();
const {
        signUp, 
        logIn, 
        } = require('../controllers/user.controller.js');

router.post('/signup', signUp);

router.post('/login', logIn);

module.exports = router;