const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');

//router user 

router.post('/signup', userCtrl.signup);

router.post('/login', userCtrl.login);

router.post('/deleteUser/:Id',auth, userCtrl.deleteUser);

router.put('/updateUser/:Id', auth, userCtrl.updateUser);

router.get('/getOneUser/:Id', userCtrl.getOneUser)

module.exports = router;