import { NextFunction, Request, Response } from 'express';

export function validateWeddingDitsGET(req:Request, res:Response, next:NextFunction){
    
    // let nrelation='';
    // let nlocation='';
    // let nmonth = 0;
    
    // if(req.method==='GET'){
    // const {relation,location, month} = req.params;
    const relation:string = req.params.relation;
    const location:string = req.params.location;
    const month:number = Number(req.params.month);
    //     nrelation=relation;
    //     nlocation = location;
    //     nmonth = Number(month);
    // }else{
    //     const {relation,location, month} = req.body;
    //     nrelation=relation;
    //     nlocation = location;
    //     nmonth=nmonth = month;
    // }

    if(!['family','friends','collegues','not related'].includes(relation)){
        next(new Error('unfamiliar relation!')); 
    }else if(!['israel','out of state'].includes(location)){
        next(new Error('unfamiliar location!')); 
    }else if(month<1 || month>12 || !Number.isInteger(month)){
        next(new Error('unfamiliar month!'));
    }else{
        next();
    }
}

export function validateWeddingDitsPOST(req:Request, res:Response, next:NextFunction){
    

    const {relation,location, month} = req.body;


    if(!['family','friends','collegues','not related'].includes(relation)){
        next(new Error('unfamiliar relation!')); 
    }else if(!['israel','out of state'].includes(location)){
        next(new Error('unfamiliar location!')); 
    }else if(month<1 || month>12 || !Number.isInteger(month)){
        next(new Error('unfamiliar month!'));
    }else{
        next();
    }
}