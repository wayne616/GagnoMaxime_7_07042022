"use strict";

var express = require('express');

var router = express.Router();

var multer = require('../middleware/multer-config'); // const auth = require('../middleware/auth');


var messageCtrl = require('../controllers/message_send');

router.get('/', messageCtrl.getAllMessage);
router.post('/', multer, messageCtrl.createMessage);
router["delete"]('/:Id', messageCtrl.deleteMessage);
module.exports = router;