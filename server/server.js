'use strict';

const express = require('express');
const app = express();
const PORT = 4000;
const multer = require('multer');

// const upload = multer({ dest: 'uploads/' });

// app.use((req, res, next) => {
//   log.info("Hello!");
//   next();
// })

const storage = multer.diskStorage({
  destination: 'server/uploads',
  filename: (req, file, cb) => {
    if (req) {
      console.log('storage', req);
    }
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const createId = () => (
  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
);

app.use(express.static('/build'));

app.post('/report', upload.array('myFiles', 12), (req, res) => {
  console.log(upload);
  const files = req.files;
  if (!files) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    // return next(error);
  }
  const id = createId();
  files.forEach(file => { file.filename = `${id}.${file.filename}`; });
  // console.log(upload.array);
  console.log(req.body);
  const { title, body } =  req.body;
  const report = { id, title, body };

  console.log(report);
  console.log(files);
  res.status(200).send('Report Accepted');
});

app.listen(PORT, () => console.log(`ANYWAY Organizations Platform listening on port ${PORT}!`));