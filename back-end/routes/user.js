const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

//router user 
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// router.post('/logout/:Id', auth,userCtrl.logout);

router.post('/deleteUser/:Id',auth, userCtrl.deleteUser);

router.get('/getOneUser/:Id', userCtrl.getOneUser)

router.put('/updateUser/:Id', auth, userCtrl.updateUser);

module.exports = router;