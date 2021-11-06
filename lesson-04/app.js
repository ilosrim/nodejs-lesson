// Node JS hodisalari
const fs = require('fs');
const rs = fs.createReadStream('./demo.txt');

fs.appendFile('demo.txt', 'hello world', (err) => {
  if (err) throw err;
  console.log('Saved!');
});

rs.on('open', () => {
  console.log('The file is open');
})