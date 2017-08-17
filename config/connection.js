var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burger_db"
});


if(process.env.JAWSBD_URL)
{
connection = mysql.createConnection(process.env.JAWSBD_URL);
}else {
  connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hacktheplante',
    database: 'todoagain_db'
  });
}
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;