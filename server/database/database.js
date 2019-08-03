/*
  *** temporary db on server ***
*/

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
  * get files array from db
*/
exports.getFiles = (path = './server/database/uploads/') => {
  let filesArray = [];
  try {
    filesArray = fs.readdirSync(path);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found!');
    } else {
      throw err;
    }
  }
  return filesArray;
};

/*
  * set reports array to db
*/
exports.sendData = (data, file = 'server/database/reports.json') => {
  fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('The file is updated!');
    }
  });
};

/*
  * remove files from db
*/
exports.deleteFiles = (files, path = './server/database/uploads/') => {
  (function deleteFile() {
    if (!files) {
      return;
    }
    const file = files[files.length - 1];
    fs.unlink(`${path}${file}`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`File ${file} removed!`);
        if (files.length > 1) {
          files.pop();
          return deleteFile(files);
        }
      }
    });
  })();
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