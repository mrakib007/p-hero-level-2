{
    //nullable types / unknown types

    const searchName = (value : string | null) =>{
        if(value){
            console.log('seraching');
        }else{
            console.log('there is nothing to search');
        }
    } 

    // searchName('Rakib');
    searchName(null);
    
    //unknown typeof
    const getSpeedInMeterPereSecond = (value: unknown) =>{
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);  
        }
        else if(typeof value === 'string'){
            const [result,unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result)*1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else{
            console.log('Wrong input');
        }

    }

    getSpeedInMeterPereSecond(`1000 kmh^-1`);
    getSpeedInMeterPereSecond(null);

    //never
    const throwError = (msg: string) : never => {
        throw new Error(msg);
    }
    throwError('There is an error here');

    //
}