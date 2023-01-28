
import bodyParser from 'body-parser';
import {Request, Response, Router} from 'express';
import { weddingCalc } from "./index";
import { validateWeddingDitsGET,validateWeddingDitsPOST } from "./middlewares";

// relation:'family'|'friends'|'collegues'|'not related';
// location:'israel'|'out of state';

interface wedding_dits{
    relation:string;
    location:string;
    month:number;
}

export const Wcalc = Router();
Wcalc.use(bodyParser.json());

Wcalc.get('/',(req:Request,res:Response)=>{
    res.send('welcome to my wedding calc!');
});

Wcalc.get('/wedding-amount/:relation/:location/:month',validateWeddingDitsGET,(req:Request,res:Response)=>{
    const {relation,location, month} = req.params;
    res.send({result:weddingCalc(relation,location, Number(month))});

});
Wcalc.post('/wedding-amount',validateWeddingDitsPOST, (req:Request,res:Response)=>{
    const {relation,location, month} = req.body;
    res.send({result:weddingCalc(relation,location, Number(month))});
});