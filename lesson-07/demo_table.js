const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "ALTER TABLE customerss (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});