const http = require('http');
const through = require('through2');

http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.end(405);
    }
    req.pipe(through(function (buf, _, next) {
        this.push(buf.toString().toUpperCase());
        next();
    })).pipe(res);
}).listen(process.argv[2]);
