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
    const sqlMessage = `SELECT Nom, Prenom, text, img, user_id, message_send.Id FROM message_send INNER JOIN user ON message_send.user_id  = user.Id WHERE user_id <> ${req.params.Id} ORDER BY Id `;
    const user_id = req.params.Id;
    
    Connection.query( sqlMessage, user_id, (error, results) => {
        if (error) {
            res.json({ error });
        } 
        res.send(results);
    });

};

//Afficher les messages de l'user connecté 
exports.getOneMessageUser = (req, res, next) => {
    const sqlMessage = `SELECT Nom, Prenom , text, img, user_id, message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.Id WHERE user_id = ${req.params.Id} ` ;

    Connection.query(sqlMessage, (error, results) => {
        if (error) {
            console.log(error);
            res.json({ error });
        } 
        // if (results[0].user_id !== req.auth.userId) {
        //     return res.status(401).json({message :"interdit"})
        // }
        res.send(results);
    })

}

// suppression du message 
exports.deleteMessage = (req, res, next) => {
    const text = req.params.Id;
    const sqlMessagedelete = "DELETE FROM message_send WHERE Id = ? ";
    const sqlMessageSelect = "SELECT Nom , Prenom , text, img, user_id ,message_send.Id FROM message_send INNER JOIN user ON message_send.user_id = user.id WHERE message_send.Id = ?";
    
    Connection.query(sqlMessageSelect, [text], (error, results) => {
        if (error) console.log(error);

        if (results[0].user_id !== req.auth.userId) {
            return res.status(401).json({message :"interdit"})
        }
        let filename;

        if(results[0].img){
            filename = results[0].img.split('/images/')[1]
        }
        
        Connection.query(sqlMessagedelete, [text],(error, results) => {
            console.log(results);
            if (error) console.log(error);
          
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
        if (error) console.log(error);
        console.log(results);
        if (results[0].user_id !== req.auth.userId) {
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
// exports.createCom = (req, res, next) => {
//     const sqlSelectMessge = `SELECT * FROM message_send WHERE Id = Id`;
    // const sqlCreateCom = 'INSERT INTO commentaire_send SET ?';
    // const com = {text : req.body.text, user_id: req.params.Id};

    // Connection.query(sqlSelectMessge, com, (error, result) => {
        // console.log(error);
        // console.log(result);
        // console.log(req.body);
        // console.log(req.params);
        // console.log(com);

    // Connection.query( sqlCreateCom, [com], (error, result) => {
    //     console.log(result);
    //     if (error) {
    //         console.log(error);
    //         res.json({ error });
    //     } else {
    //         res.json({ message: "test" });
    //         }
    //             }
    
    //     )
    // })

    // const IdUser = req.params.Id;
    // const text  = req.body.text;
    // const com = {text : req.body.text, user_id: req.params.Id}
    // console.log(com);
    // Connection.query(
    //     "INSERT INTO commentaire_send SET ? ", [com] ,(error, results) => {
    //         if (error) {
    //             console.log(error);
    //             res.json({ error });
    //         } else {
    //             console.log(results); 
    //             res.json({ message: "Commentaire envoyé dans la bdd !!" });
    //         }
    //     }
    // );
// };

// Affichage des commentaire
// exports.getAllCom = (req, res, next) => {
//     const sqlcommentaire = "SELECT * FROM commentaire_send WHERE Id = Id";

//     Connection.query(sqlcommentaire, (error, results) => {
//         res.send(results);
//     });
// };

// suppression du commentaire
// exports.deleteCom = (req, res, next) => {
//     const sqlComdelete = `DELETE FROM commentaire_send WHERE Id = ${req.params.Id}`;
//     const sqlComSelect = `SELECT * FROM commentaire_send WHERE Id = ${req.params.Id}`;

//     Connection.query(sqlComSelect, (error, results) => {
//         console.log(req.params.Id);
//         console.log(results);
//         if (error) console.log(error); 
        
//         console.log(results[0].user_id);
       
//         if (results[0].user_id !== req.auth.userId) {
            
//             return res.status(401).json({message :"interdit"})
//         }
//         Connection.query(sqlComdelete, (error, result) => {
//             if (error) {
//                 res.json({ error });
//             } else {
//                 return res.status(200).json({ message: "Commentaire supprimé !!" });
//             }
//         })
//     });
// };


// // update du commentaire envoyer dans la bdd
// exports.UpdateCom = (req, res, next) => {
//     const Id = req.params.Id;

//     const sqlComSelect = `SELECT * FROM commentaire_send WHERE Id = ${req.params.Id}`;
//     const sqlComUpdate = `UPDATE commentaire_send SET text = ? WHERE Id = ${req.params.Id}`;

//     Connection.query(sqlComSelect, Id, (error, results) => {
//         if (error) console.log(error);
//         console.log(results);
//         if (results[0].user_id !== req.auth.userId) {
//             return res.status(401).json({message :"interdit"})
//         } 
//         Connection.query(sqlComUpdate, (error, result) => {
//             if (error) {
//                 // console.log(error);
//                 res.json({ error });
//             } else {
//                 // console.log(results);
//                 res.json({ message: "Commentaire modifié dans la bdd !!" });
//             }
//         })
// });
// };