const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message_send');
 
// router message CRUD

router.post('/', auth, multer, messageCtrl.createMessage);

router.get('/', messageCtrl.getAllMessage);

router.delete('/:Id',auth, messageCtrl.deleteMessage);

router.put('/:Id', auth, multer, messageCtrl.UpadteMessage);

// router Admin delete 

router.delete('/:Id/:Admin', auth, messageCtrl.deleteMessageAdmin);

//router likes 

router.post('/likes/:Id',messageCtrl.Createlikes);

router.get('/likes', messageCtrl.GetLikes);

module.exports = router;