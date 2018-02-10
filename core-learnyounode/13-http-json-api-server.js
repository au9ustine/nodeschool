const url = require('url');
const http = require('http');

http.createServer((req, res) => {
    let time = new Date(url.parse(req.url, true).query.iso);
    let result = /^\/api\/parsetime/.test(req.url) ? {
        'hour': time.getHours(),
        'minute': time.getMinutes(),
        'second': time.getSeconds()
    } : /^\/api\/unixtime/.test(req.url) ? {
        'unixtime': time.getTime()
    } : null;

    if (result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        result = JSON.stringify(result);
    } else {
        res.writeHead(404);
    }

    res.end(result);
}).listen(process.argv[2] | 0);
