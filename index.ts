// relation:'family'|'friends'|'collegues'|'not related';
// location:'israel'|'out of state';

export function weddingCalc(relation:string,location:string, month:number){
    
    let finalAmount = 200;
    
    switch(relation){
        case 'family':
            finalAmount *= 3;
            break;
        case 'friends':
            finalAmount *= 2;
            break;
        case 'collegues':
            finalAmount *= 1.5;
            break;
        case 'not related':
            break;
    }

    if(location==='isreal'){
        finalAmount+=50;
    }else if (location==='out of state'){
        finalAmount+=100;
    }

    if(1 <= month && month <=6){
        finalAmount += 10;
    }else{
        finalAmount+=20;
    }

    return finalAmount;

    
}