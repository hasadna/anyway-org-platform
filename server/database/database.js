/*
  *** temporary db on server ***
*/
'use strict';

const fs = require('fs');
const multer = require('multer');

/*
  * get reports array from db
*/
exports.getData = (path = './server/database/reports.json') => {
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found!');
    } else {
      throw err;
    }
  }
  return data;
};

/*
  * set reports array to db
*/
exports.sendData = (file, data) => {
  fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('The file is updated!');
    }
  });
};

/*
  * multer storage definition for uploaded files by user
*/
const storage = multer.diskStorage({
  destination: 'server/database/uploads',
  filename: (req, file, cb) => {
    cb(null, `${req.id}.${file.originalname}` );
  }
});
exports.upload = multer({ storage: storage });

