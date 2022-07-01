const Connection = require("../config/DB.js");
const fs = require('fs');

// création message 
exports.createMessage = (req, res, next) => {

    const text = { text: req.body.text , img: null, user_id : req.body.user_id};
    if (req.file) {
        text.img = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    console.log(text);
    Connection.query(
        "INSERT INTO message_send SET ? ",
        text ,
        (error, results) => {
            console.log(results);
            if (error) {
                console.log(error);
                res.json({ error });
            } else {
                console.log(results);
                res.json({ message: "Message envoyé dans la bdd !!" });
            }
        }
    );
};

// Affichage les messages des autres users 
exports.getAllMessage = (req, res, next) => {
    const sqlMessage = `SELECT Nom, Prenom, text, img, user_id, date, message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.Id  ORDER BY Id `;
    
    Connection.query( sqlMessage, (error, results) => {
        if (error) {
            res.json({ error });
        } 
        console.log(results);
        res.send(results);
    });

};

// suppression du message 
exports.deleteMessage = (req, res, next) => {
    const text = req.params.Id;
    const sqlMessagedelete = "DELETE FROM message_send WHERE Id = ? ";
    const sqlMessageSelect = "SELECT Nom , Prenom , text, img, user_id ,message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.id WHERE message_send.Id = ?";
    
    Connection.query(sqlMessageSelect, [text], (error, results) => {
        if (error){
            res.json({ error });
        }
        console.log(results);
        console.log(text);
        if (results[0].user_id !== req.auth.userId) {
            console.log(results[0].user_id);
            return res.status(401).json({message :"interdit"})
        }
        let filename;

        if(results[0].img){
            filename = results[0].img.split('/images/')[1]
        }

        Connection.query(sqlMessagedelete, [text],(error, results) => {
            if (error) {
                res.json({ error });
            }          
            if(filename) {
                fs.unlink(`images/${filename}`, () => { });
            }
            });
    });
    
};

// update du message 
exports.UpadteMessage = (req, res, next) => {
    const MessageObject = req.file ?
    {
      ...req.body,
      img: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    const sqlMessageSelect = `SELECT * FROM message_send WHERE Id = ${req.params.Id}`;
    const sqlMessageUpdate = `UPDATE message_send SET text = ? , img = ? WHERE Id = ${req.params.Id}`;

        Connection.query(sqlMessageSelect, (error, results) => {
        if (error) {
            res.json({ error });
        }
        console.log(results);
        if (results[0].user_id !== req.auth.userId) {
            return res.status(401).json({message :"interdit"})
        }
    Connection.query(sqlMessageUpdate, [MessageObject.text, MessageObject.img], (error, results) => {
        if (error) {
            res.json({ error });
        } else {
            res.json({ message: "Message modifié dans la bdd !!" });
        }
});
})
};