const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) throw err;
//   console.log('Papka yaratildi!');
// });

const writeFiles = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(writeFiles, 'Hello NodeJS', err => {
//   if (err) throw err;
//   console.log('Fayl yaratildi!');
//   fs.appendFile(writeFiles, '\nHello again', err => {
//     if (err) throw err;
//     console.log('Ikkinchi gap qo`shildi');
//   })
// });

fs.readFile(writeFiles, 'utf-8', (err, content) => {
  if (err) throw err;
  console.log(content);
})