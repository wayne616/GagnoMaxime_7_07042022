const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message_send');
 
// router message

router.post('/', auth, multer, messageCtrl.createMessage);

router.get('/:Id', messageCtrl.getAllMessage);
router.get('/user/:Id', auth, messageCtrl.getOneMessageUser);


router.delete('/:Id',auth, messageCtrl.deleteMessage);

router.put('/:Id', auth, multer, messageCtrl.UpadteMessage);



//router commentaire
// router.get('/com', messageCtrl.getAllCom);
// router.post('/com/:Id', messageCtrl.createCom);
// router.delete('/com/:Id', auth, messageCtrl.deleteCom);
// router.put('/com/:Id',auth, messageCtrl.UpdateCom);


module.exports = router;