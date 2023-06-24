const fs = require('fs');


const read = (filename)=>{
    return new Promise((resolve, reject) => {
        fs.readFile('D:/Dev/Harikirat Full Stack/Week-2-Assignments/02-nodejs/files/'+filename,'utf8',(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}








module.exports = read;