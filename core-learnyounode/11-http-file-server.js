const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(process.argv[2]);
