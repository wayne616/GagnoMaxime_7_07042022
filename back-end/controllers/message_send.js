const Connection = require('../config/DB.js');

// création et insertion de nouveau message dans la base de donnée
exports.createMessage = (req, res, next) =>{
    const text = {text: req.body.text};

        Connection.query(
            'INSERT INTO message_send SET ? ', text, (error, results) =>{
                if (error) {
                    console.log(error);
                    res.json({error})
                  } else {
                    console.log(results);
                    res.json({message:"Message envoyé dans la bdd !!"});
                }        
            }
        )
};

// récuperation des messages dans la base de donnée 
exports.getAllMessage = (req, res, next) =>{
    const sqlMessage = "SELECT * FROM message_send "; 

    Connection.query(sqlMessage, (error, results) => {
        res.send(results)
    });
};

// suppretion du message de la base de donné 
exports.deleteMessage = (req, res, next) => {
    const text = req.body.text;
    const sqlMessagedelete = "DELETE * FROM message_send SET = ? ";

    Connection.query(sqlMessagedelete, text, (error, results) => {
       if (error) console.log(error);

    });
};