const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');

//router user 

router.post('/signup', userCtrl.signup);

router.post('/login', userCtrl.login);

router.post('/deleteUser',auth, userCtrl.deleteUser);

router.put('/updateUser', auth, userCtrl.updateUser);

router.get('/getOneUser', auth, userCtrl.getOneUser)

module.exports = router;