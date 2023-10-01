import express from 'express';
import Apiroutes from './routes';

const app = express();


const setupAndStart = ()=> {
    app.use(Apiroutes);
    app.listen(3000,()=>{
        console.log(`Server started on 3000`);
    });
}

setupAndStart();