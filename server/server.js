const express = require('express');
const app = express();
const PORT = 4000;
const db = require('./database/database');

/*
  *** temporary db on server ***
*/
let reportsData = db.getData();
const files = db.getFiles();
// multer
const upload = db.upload;

/*
  * middleware for post req to report path
  * add id to req for file name
*/
app.use('/report', (req, res, next) => {
  if (req.method === 'POST') {
    req.id = createId();
  }
  next();
});

/*
  * uniq id
*/
const createId = () => (
  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
);

/*
  * serve static files after build
*/
app.use(express.static('/build'));

/*
  * GET => /reportsData[index].files[index]
  * serve static files from server/database/uploads
*/
app.use(express.static('server/database/uploads'));

/*
  * POST => /report
  * get data from user and save to local db
  * files are handled by multer at ./database/database => upload.array('myFiles', 12)
*/
app.post('/report', upload.array('myFiles', 12), (req, res) => {
  const files = req.files.map(file => file.filename);
  const id = req.id;
  const date = (new Date()).toString();
  const { userId, title, body, lat, lng } =  req.body;
  const report = { id, date, userId, title, body, lat, lng, files };
  reportsData.push(report);
  db.sendData(reportsData);
  res.status(201).send('Report Created');
});

/*
  * DELETE => /report/:id
  * delete data from db by report id
*/
app.delete('/report/:id', (req, res) => {
  const id = req.params.id;
  const filesToDelete = files.filter(file => file.split('.')[0] === id);
  if (reportsData.find(report => report.id === id)) {
    db.deleteFiles(filesToDelete);
    reportsData = reportsData.filter(report => report.id !== id);
    db.sendData(reportsData);
    res.status(200).send('Report Deleted');
  } else {
    res.status(400).send('Report Not Found, Check id validation');
  }
});

/*
  * GET => /reports
  * get all reports data from db
*/
app.get('/reports', (req, res) => {
  res.status(200).send(reportsData);
});

app.listen(PORT, () => console.log(`ANYWAY Organizations Platform listening on port ${PORT}!`));