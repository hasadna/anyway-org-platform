'use strict';

const express = require('express');
const app = express();
const PORT = 4000;
const db = require('./database/database');

/*
  *** temporary db on server ***
*/
const reportsData = db.getData();
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
  * get data from user and save to local db
*/
app.post('/report', upload.array('myFiles', 12), (req, res) => {
  const files = req.files.map(file => file.filename);
  const id = req.id;
  const date = (new Date()).toString();
  const { userId, title, body, geolocation } =  req.body;
  const report = { id, date, userId, title, body, geolocation, files };
  reportsData.push(report);
  db.sendData('server/database/reports.json', reportsData);
  res.status(200).send('Report Accepted');
});

app.listen(PORT, () => console.log(`ANYWAY Organizations Platform listening on port ${PORT}!`));