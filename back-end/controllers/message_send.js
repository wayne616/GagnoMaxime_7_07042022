const Connection = require("../config/DB.js");

// création et insertion de nouveau message dans la bdd
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
                console.log(error);
                res.json({ error });
            } else {
                console.log(results);
                res.json({ message: "Message envoyé dans la bdd !!" });
            }
        }
    );
};

// récuperation des messages dans la bdd
exports.getAllMessage = (req, res, next) => {
    const sqlMessage = "SELECT Nom , Prenom , text, img , user_id ,message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.Id";

    Connection.query( sqlMessage, (error, results) => {
        res.send(results);
    });

};

// suppression du message de la bdd
exports.deleteMessage = (req, res, next) => {
    // console.log(req.params);
    const IdText = req.params.Id;
    // console.log(IdText);

    const sqlMessageSelect = "SELECT user_id, message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.Id";
    // const sqlMessagedelete = "DELETE message_send WHERE Id = ? ";


    Connection.query(sqlMessageSelect, [IdText], (error, results) => {

        const message = results[0];
        console.log(error);
        console.log(message);
        // const message = results[0];
        // console.log(message);
        // if (error) console.log(error);
        // console.log(results);
        //     if (message.userid !== req.auth.userId) {
        //         console.log(error);
        //     return res.status(401).json({message :"interdit"})
        //    }
        //  Connection.query(sqlMessagedelete, (error, results) => {
        //      console.log(results);
        //    if (error) console.log(error);
       
        // });

    })

    // Connection.query(`DELETE FROM message_send WHERE message_send.user_id = ${req.params.user_id}`, (error, result) => {
    //     // console.log(error);
    //     console.log(result);
    //     // if (error) {
    //     //     return res.status(401).json({message :"interdit"});
    //     // }
    //     return res.status(200).json(result);
    // });

    // const text = req.params.Id;
    // const sqlMessageSelect = "SELECT * FROM message_send WHERE Id = ? ";
    // // const sqlMessagedelete = "DELETE FROM message_send INNER JOIN user ON message_send.user_id = user.Id ";
    // Connection.query(sqlMessageSelect, text, (error, results) => {
    //     // console.log(text);
    //     // console.log(error);
    //     // console.log(results);

    //     if (error) console.log(error);

    //     if (text.userId !== req.auth.userId) {
    //         console.log(req.auth.userId);
    //         console.log(results);
    //         return res.status(401).json({message :"interdit"})
    //     }

    // //     Connection.query(sqlMessagedelete, text, (error, results) => {
    // //        if (error) console.log(error);
    // // })
    // });

    

    // const text = req.params.Id;
    // const sqlMessagedelete = "DELETE FROM message_send WHERE Id = ? ";
    // const sqlMessageSelect = "SELECT Nom , Prenom , text, img , user_id ,message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.Id";

    // Connection.query(sqlMessageSelect, [text], (error, results) => {
    //     if (error) console.log(error);
    //     console.log(results);
    //     if (results[0].userid !== req.auth.userId) {
    //         return res.status(401).json({message :"interdit"})
    //     }
    //     Connection.query(sqlMessagedelete, (error, results) => {
    //        if (error) console.log(error);
    // });
    // })
    
};

// update du message envoyer dans la bdd
exports.UpadteMessage = (req, res, next) => {
    const MessageObject = req.file ?
    {
      ...req.body,
      img: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    const sqlMessageSelect = `SELECT * FROM message_send WHERE Id = ${req.params.Id}`;
    const sqlMessageUpdate = `UPDATE message_send SET text = ? , img = ? WHERE Id = ${req.params.Id}`;

        Connection.query(sqlMessageSelect, (error, results) => {
        if (error) console.log(error);
        console.log(results);
        if (results[0].Id !== req.auth.userId) {
            return res.status(401).json({message :"interdit"})
        }
    Connection.query(sqlMessageUpdate, [MessageObject.text, MessageObject.img], (error, results) => {
        if (error) {
            // console.log(error);
            res.json({ error });
        } else {
            // console.log(results);
            res.json({ message: "Message modifié dans la bdd !!" });
        }
});
})
};

// création commentaire
exports.createCom = (req, res, next) => {
    const Com = { com: req.body.com };

    Connection.query(
        "INSERT INTO commentaire_send SET ? ", Com, (error, results) => {
            if (error) {
                console.log(error);
                res.json({ error });
            } else {
                console.log(results);
                res.json({ message: "Commentaire envoyé dans la bdd !!" });
            }
        }
    );
};

// récuperation des commenatires dans la bdd
exports.getAllCom = (req, res, next) => {
    const sqlcommentaire = "SELECT * FROM commentaire_send ";

    Connection.query(sqlcommentaire, (error, results) => {
        res.send(results);
    });
};

// suppression du commentaire de la bdd
exports.deleteCom = (req, res, next) => {
    const com = req.params.Id;
    const sqlComdelete = "DELETE FROM commentaire_send WHERE Id = ? ";

    Connection.query(sqlComdelete, com, (error, results) => {
        //    if (error) console.log(error);
    });
};


// update du commentaire envoyer dans la bdd
exports.UpadteCom = (req, res, next) => {
    const Id = req.params.Id;
    const sqlComUpdate = "UPDATE commentaire_send SET com = ? WHERE Id = Id ";

    Connection.query(sqlComUpdate, Id, (error, results) => {
        if (error) {
            // console.log(error);
            res.json({ error });
        } else {
            console.log(results);
            res.json({ message: "commentaire modifié dans la bdd !!" });
        }
});
};