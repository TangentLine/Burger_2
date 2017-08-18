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
    host: 'i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'hkppvm5nbidi0gi6',
    password: 'bzhc4jj91l3ntl98',
    database: 'hx6up307to0g3wyk'
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