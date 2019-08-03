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

### npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### npm run server

Runs the server in the development mode (nodemon).<br>

Server can receive any file format and form data via multipart/form-data.<br>

Temporary db is on server using fs & multer: <br>
* Files are stored at: /server/database/uploads <br>
* Json report file at: /server/database/reports.json

#### POST requests

POST requests path [http://localhost:4000/report](http://localhost:4000/report)<br>

#### DELETE requests

DELETE requests path [http://localhost:4000/report/id](http://localhost:4000/report/id)<br>

#### GET requests

GET requests path for all reports data [http://localhost:4000/reports](http://localhost:4000/reports)<br>

GET requests path for files uploaded by user [http://localhost:4000/file_name](http://localhost:4000/file_name)<br>
* File name will be id.original_file_name.file_extension

## TO DO

#### Client-side

* Handle GET requests.
* Handle DELETE requests.
* Show GET data on map - show on map and side bar.
* Add link option in report.
* Continue with favorite location for later reports - show on map and side bar.

#### Server-side

* Add link property to report data.
