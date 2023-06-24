const express = require('express');
const read = require('../services/fileServerService');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get("/file/:filename",(req,res)=>{
        try {
            const filepath = "D:/Dev/Harikirat Full Stack/Week-2-Assignments/02-nodejs/files/"
            const filename = req.params.filename;
            res.download(filepath+filename,filename,(err)=>{
                if(err){
                    return res.status(404).json({
                        err:err,
                        success:false
                    })
                }
            })
        } catch (error) {
            return res.status(404).json({
                err:error,
                success:false
            })
        }
});
router.get("/files",(req,res)=>{
    try {
        let filesList = [];
        const directoryPath = 'D:/Dev/Harikirat Full Stack/Week-2-Assignments/02-nodejs/files/';
          const files = fs.readdirSync(directoryPath);
          files.forEach((file) => {
            console.log(file)
            filesList.push(file);
          });
          return res.status(201).json({
            data : filesList,
            success:true
          })
        
    } catch (error) {
        return res.status(404).json({
            err:error,
            success:false
        })
    }
});
router.get("/readfile/:filename",async (req,res)=>{
        try {
            const data = await read(req.params.filename);
            return res.status(201).json({
                response : data,
                success:true,
            })
        } catch (error) {
            return res.status(404).json({
                err:error,
                success:false
            })
        }
});


module.exports = router;