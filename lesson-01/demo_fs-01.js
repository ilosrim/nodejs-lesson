const fs = require('fs');

// appendFile()
// open()
// writeFile()
// unlink()

fs.unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('Saved!');
});