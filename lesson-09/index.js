const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server run!');
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'public', 'index.html'));
});


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });


// statik fayllar
app.use(express.static(path.join(__dirname, 'public')));

// middleware

const logger = (req, res, next) => {
  // console.log("Hello middleware!!!");
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
};

app.use(logger);

app.get('/members', (req, res) => {
  res.json(members);
});

app.get('/members/id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({
      "msg": "No user!"
    });
  }
});

app.use('/api/members', require('./routes/api/member'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));