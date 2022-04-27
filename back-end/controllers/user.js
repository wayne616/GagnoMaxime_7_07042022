const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const Connection = require('../config/DB.js');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        password : hash,
        email : req.body.email,
      }
      Connection.query(
        'INSERT INTO user SET ?', user, (error, result) => {
          if (error) {
            console.log(error);
            res.json({error})
          } else {
            // console.log(result);
            res.json({message:"utilisateur créer !! "});
          }
        }

      )}
    ).catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  const email = { email: req.body.UserEmail};
  // const password = { email: req.body.UserPassword};

  // console.log(email);
Connection.query(
  'SELECT * FROM user WHERE email = ? ', email, (error, results) => {
    if (error) {
      console.log(error);
      res.json({error});      
    } else {
      console.log(results);
      res.json({message : "email dans la bdd"});

      if (results !== 0 ) {
        return res.status(404).json({error: "utilisateur inexistant"});
      }
    }
  }
)
};

// exports.Login = (req, res, next) => {
//   User.findOne({ email: req.body.email })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({ error: 'Utilisateur non trouvé !' }); 
//       }
//       bcrypt.compare(req.body.password, user.password)
//         .then(valid => {
//           if (!valid) {
//             return res.status(401).json({ error: 'Mot de passe incorrect !' });
//           }
//           res.status(200).json({
//             userId: user._id,
//             token: jwt.sign(
//               { userId: user._id },
//               'RANDOM_TOKEN_SECRET',
//               { expiresIn: '24h' }
//             )
//           });
//         })
//         .catch(error => res.status(500).json({ error }));
//     })
//     .catch(error => res.status(500).json({ error }));
// };