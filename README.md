## ANYWAY Organizations Platform 
## Description
Read https://drive.google.com/file/d/1N35Y2QzfJh1TPlkyTPTYoyUhAKHmI94h/view?usp=sharing to start working.

Note: Current ANYWAY website: www.anyway.co.il (We use Google Maps - Please do too)

## Flow

## Usage
1.Run `git clone https://github.com/hasadna/anyway-org-platform.git`

2.Open repo  `cd anyway-org-platform`

3.Run `npm I`, to install the module's prerequisites

4.Run `npm start`, to run the App.

5.Run `npm run server`, to run the Server.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run server`

Runs the server in the development mode (nodemon).<br>

POST requests path [http://localhost:4000/report](http://localhost:4000/report)<br>

Server can receive any file format and form data via multipart/form-data.<br>

Temporary db is on server using fs & multer: <br>
* Files are stored at: /server/database/uploads <br>
* Json report file at: /server/database/reports.json






