const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
// const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message_send');

router.get('/', messageCtrl.getAllMessage);
router.post('/', multer, messageCtrl.createMessage);
router.delete('/', messageCtrl.deleteMessage);

module.exports = router;