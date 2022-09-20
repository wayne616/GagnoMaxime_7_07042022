const Connection = require("../config/DB.js");
const fs = require('fs');

// création message 
exports.createMessage = (req, res, next) => {

    const text = { text: req.body.text , img: null, user_id : req.body.user_id};
    if (req.file) {
        text.img = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    Connection.query(
        "INSERT INTO message_send SET ? ",
        text ,
        (error, results) => {
            if (error) {
                res.json({ error });
            } else {
                res.json({ message: "Message envoyé dans la bdd !!" });
            }
        }
    );
};

// Affichage des messages 
exports.getAllMessage = (req, res, next) => {
    const sqlMessage = `SELECT Nom, Prenom, text, img, user_id, date, likes, message_send.Id, message_send.admin FROM message_send INNER JOIN user ON message_send.user_id = user.Id  ORDER BY date DESC `;
    
    Connection.query( sqlMessage, (error, results) => {
        if (error) {
            res.json({ error });
        } 
        res.send(results);
    });

};

// suppression du message 
exports.deleteMessage = (req, res, next) => {
    const text = req.params.Id;
    const sqlMessagedelete = "DELETE FROM message_send WHERE Id = ?";
    const sqlMessageSelect = "SELECT Nom , Prenom , text, img, user_id ,message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.id WHERE message_send.Id = ?";
    
    Connection.query(sqlMessageSelect, [text], (error, results) => {
        if (error){
           return res.json({ error: error });
        }
        if (results[0].user_id !== req.auth.userId) {
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
            }else {
                res.json({ message: "Message supprimé de la bdd !!" });
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
            return res.json({ error });
        }
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

// suppression du message admin
exports.deleteMessageAdmin = (req, res, next) => {

    const sqlMessagedelete = `DELETE FROM message_send WHERE Id = '${req.params.Id}'`;
    const sqlMessageSelect = `SELECT img, user_id, message_send.admin ,message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.id WHERE message_send.Id = '${req.params.Id}'  `;

    Connection.query(sqlMessageSelect, (error, results) => {
        if (error){
          return res.json({ error });
        }
        if (results[0].admin !== req.auth.Admin) {
         return res.status(401).json({message :"interdit"})
        }
        let filename;

        if(results[0].img){
            filename = results[0].img.split('/images/')[1]
        }

        Connection.query(sqlMessagedelete, (error, results) => {
            if (error) {
               return res.json({ error });
            } 
            if(filename) {
                fs.unlink(`images/${filename}`, () => { });
            }else {
                res.json({ message: "Message supprimé de la bdd !!" });
            }
            
            });
    });
    
};


// Ajout de likes dans la table message 
exports.Createlikes = (req, res, next) => {

    const sqlgetAllMessage = `SELECT message_send.Id, likes , user_likes FROM message_send WHERE Id = ${req.body.post_id}`;
    const sqlUpdateOneMessage = `UPDATE message_send SET likes = ?, user_likes = ? WHERE Id = ${req.body.post_id} `;

    const user_id = parseInt(req.params.Id);

    Connection.query(sqlgetAllMessage,
        (error,results) => {
            if (error) {
                res.json({error});
            }

            let likes= results[0].likes;
            let user_likes =  results[0].user_likes.length ? JSON.parse(results[0].user_likes) : [];

            if (user_likes.includes(user_id)) {
                likes = likes-1;
                user_likes = user_likes.filter((user)=> user != user_id  ) 
            }else{
                likes = likes+1;
                user_likes.push(user_id)
            }
        
        Connection.query(sqlUpdateOneMessage,[likes, JSON.stringify(user_likes)],
            (error,results) => {
                if (error) {
                    res.json({error});
                }
            })
        }
    )
}
