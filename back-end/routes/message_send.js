const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message_send');

// router message
router.get('/',auth, messageCtrl.getAllMessage);
router.post('/', auth, multer, messageCtrl.createMessage);
router.delete('/:Id', auth, messageCtrl.deleteMessage);
router.put('/:Id', auth, messageCtrl.UpadteMessage);

//router commentaire
router.get('/com', messageCtrl.getAllCom);
router.post('/com', messageCtrl.createCom);
router.delete('/com/:Id', messageCtrl.deleteCom);
router.put('/com/:Id', messageCtrl.UpadteCom);


module.exports = router;