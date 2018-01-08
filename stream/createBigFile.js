//CREATE REALLY LARGE FILE 
//to test how it affects memory 

const fs = require('fs');
const file = fs.createWriteStream('./big.file');

//CREATE A FILE (with a million lines)
for(let i=0; i<= 1e6; i++) {
    file.write('Muppet' + i);
}

file.end();