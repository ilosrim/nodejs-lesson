const http = require('http');
const url = require('url');
const fs = require('fs');
const dt = require('./myfirstmodule');

http.createServer((req, res) => {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write(`The date and time are currently: ${dt.MyDateTime()}`);
  // res.write('hello world');
  // res.write(req.url);
  // const q = url.parse(req.url, true).query;
  // const txt = `${q.year} ${q.month}`;
  // res.end(txt);
  fs.readFile('demo.html', (err, data)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080);