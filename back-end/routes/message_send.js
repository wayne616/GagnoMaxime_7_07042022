const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message_send');
 
// router message

router.post('/', auth, multer, messageCtrl.createMessage);

router.get('/:Id', messageCtrl.getAllMessage);

router.delete('/:Id',auth, messageCtrl.deleteMessage);

router.delete('/:Id/:Admin', auth, messageCtrl.deleteMessageAdmin);

router.put('/:Id', auth, multer, messageCtrl.UpadteMessage);

router.post('/likes/:Id',messageCtrl.Createlikes);

router.post('/dislikes/:Id',messageCtrl.Createdislikes);

module.exports = router;