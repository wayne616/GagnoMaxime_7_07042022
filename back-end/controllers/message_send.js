const Connection = require("../config/DB.js");

// création et insertion de nouveau message dans la bdd
exports.createMessage = (req, res, next) => {
    const text = { text: req.body.text };

    Connection.query(
        "INSERT INTO message_send SET ? ",
        text,
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
    const sqlMessage = "SELECT * FROM message_send ";

    Connection.query(sqlMessage, (error, results) => {
        res.send(results);
    });
};

// suppression du message de la bdd
exports.deleteMessage = (req, res, next) => {
    const text = req.params.Id;
    const sqlMessagedelete = "DELETE FROM message_send WHERE Id = ? ";

    Connection.query(sqlMessagedelete, text, (error, results) => {
        //    if (error) console.log(error);
    });
    console.log();
};

// update du message envoyer dans la bdd
exports.UpadteMessage = (req, res, next) => {
    const text = req.body.text;
    const Id = req.body.Id;
    const sqlMessageUpdate = "UPDATE message_send SET text = ? WHERE Id = Id";

    Connection.query(sqlMessageUpdate, [text, Id], (error, results) => {
        if (error) {
            // console.log(error);
            res.json({ error });
        } else {
            console.log(results);
            res.json({ message: "Message modifié dans la bdd !!" });
        }
});
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
    const com = req.body.com;
    const Id = req.body.Id;
    const sqlComUpdate = "UPDATE commentaire_send SET com = ? WHERE Id = Id ";

    Connection.query(sqlComUpdate, [com, Id], (error, results) => {
        if (error) {
            // console.log(error);
            res.json({ error });
        } else {
            console.log(results);
            res.json({ message: "commentaire modifié dans la bdd !!" });
        }
});
};