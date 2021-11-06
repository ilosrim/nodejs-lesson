const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      let oldpath = files.filetoupload.path;
      let newpath = '/run/media/ilosrim/6F7BB5A2075FBAE5/Documents/github/ilosrim/nodejs-lessons/lesson-05' + files.filetoupload.name;
      fs.rename(oldpath, newpath, (err)=>{
        if(err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      })
      res.write('File upload');
      res.end();
    });
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write('<from action="fileupload" method="post" enctype="multipart/from-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</from>');
    res.end();
  }
}).listen(8080);