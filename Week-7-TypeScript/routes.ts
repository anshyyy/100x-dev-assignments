import express from 'express';
import fs from 'fs';

const router = express.Router();
let dir : string = "D:/Dev/Harikirat Full Stack/Week-7-TypeScript/samples/";

async function readFromFile(filename :string) : Promise<string> {
    const fileName:string = filename;
    return new Promise((res,rej)=>{
        fs.readFile(dir+fileName,'utf8',(err,data)=>{
            if(err) rej(err);
            res(data);
         });
    })
}


router.get("/hi",(req,res)=>{
    res.status(200).json({
         message : "server is ok"
       });
});

router.get("/files",(req,res)=>{
     try {
        console.log("hello ");
        
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

router.get("/file/:filename",async(req,res)=>{
    
    try {
        const fileName : string = req.params.filename;
        const filedata = await readFromFile(fileName); 
        
        return res.status(200).json({
            data : filedata,
            message : "ok",
        })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message : "SomeError has occured",
            err : error
        });
    }

})


export default router;

