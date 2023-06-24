/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const fileRoutes = require('./routes/fileRoutes');


function file (){

  const directoryPath = 'D:/Dev/Harikirat Full Stack/Week-2-Assignments/02-nodejs/files';

  try {
    const files = fs.readdirSync(directoryPath);
  
    files.forEach((file) => {
      // const filePath = path.join(directoryPath, file);
      // console.log(filePath);
      console.log(file)
    });
  } catch (err) {
    console.error('Error reading directory:', err);
  }

}



const setupAndStart = ()=>{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}))
  app.use(fileRoutes);
  app.listen(3000,()=>{
       console.log("Server running on 3000");
  });
}

setupAndStart()
