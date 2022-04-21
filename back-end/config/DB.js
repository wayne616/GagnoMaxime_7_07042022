const dotenv =require ('dotenv');
dotenv.config();

const mysql = require('mysql');
console.log(mysql);

const Connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  db: process.env.db
});
Connection.connect((err) => {
  if(err){
    console.log(`error connecting: ${err.stack}`);
  } else{
    console.log("connecté à la base de donnée -groupomania");
    console.log(`connected as id ${Connection.threadId}`);
  }
})

module.exports = Connection;