const fs = require('fs');

//reading asynchronously
fs.readFile('./texts/read.txt','utf-8',(err,data)=>{
    if(err){
        throw Error('Error reading the text');
    }
    // console.log(data);

    //writing text asynchronously
    fs.writeFile('./texts/read2.txt',data,'utf-8',()=>{
        if(err){
            throw Error('Error writing data');
        }
    })
})

console.log('testing asynchronous');