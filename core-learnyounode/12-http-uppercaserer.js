const through2map = require('through2-map');
const http = require('http');

let server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('only POST supported');
    }

    req.pipe(through2map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(process.argv[2]);
