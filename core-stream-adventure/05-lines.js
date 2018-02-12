const split = require('split');
const through2 = require('through2');

let line_count = 0;

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        (line_count++ % 2 !== 0) ?
            this.push(line.toString().toUpperCase() + '\n'):
            this.push(line.toString().toLowerCase() + '\n');
        next();
    }))
    .pipe(process.stdout);
