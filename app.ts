import cors from 'cors';
import  {Wcalc} from './endpoints';
import express, {Request, Response} from 'express';

export const myApp = express();

myApp.use(cors());

myApp.use(Wcalc);

myApp.listen(3040,()=>{
    console.log('connected to wedding calc app on port 3040!');
});

