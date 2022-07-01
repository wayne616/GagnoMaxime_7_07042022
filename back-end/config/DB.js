const mysql = require('mysql');

const Connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.db,
  port : process.env.db_port,
});
console.log(Connection);
Connection.connect((err) => {
  if(err){
    console.log(`error connecting: ${err.stack}`);
  } else{
    console.log("connecté à la base de donnée -groupomania");
    console.log(`connected as id ${Connection.threadId}`);
  }
})

module.exports = Connection;