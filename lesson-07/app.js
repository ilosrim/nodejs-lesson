const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected! 1");
});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected! 2");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });