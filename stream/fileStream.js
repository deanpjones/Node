
//JAN.07, 2018
//TEST FILE STREAM 

const fs = require('fs');
const server = require('http').createServer();

//reads the text stream...
server.on('request', (req, res) => {
    // const src = fs.createReadStream('./test.txt');   //'./stream/test.txt'
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(8000);