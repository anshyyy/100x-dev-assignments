import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get("/hi",(req,res)=>{
    res.status(200).json({
         message : "server is ok"
       });
});

router.get("/files",(req,res)=>{
     try {
        console.log("hello ");
        let dir : string = "D:/Dev/Harikirat Full Stack/Week-7-TypeScript/samples/";
        let fileNames: string[]= fs.readdirSync(dir,'utf-8');
        res.status(200).json({
            message : "ok bro",
            data : fileNames
        })
     } catch (error) {
        console.log(error);
        res.status(501).json({
            message : "SomeError has occured",
            err : error
        })
     }
});

router.get("file/:filename",(req,res)=>{
    const fileName : string = req.params.filename;
    try {
        
    } catch (error) {
        res.status(501).json({
            message : "SomeError has occured",
            err : error
        });
    }

})


export default router;

