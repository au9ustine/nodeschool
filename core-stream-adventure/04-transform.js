const through = require('through2');

process.stdin.pipe(through(function (buffer, _, next) {
    this.push(buffer.toString().toUpperCase());
    next();
})).pipe(process.stdout);

// lambda function cannot be applied in `through' due to it's unable to recognize function
//
//     TAP version 13
//     # (anonymous)
//     /Users/tianchen/projects/nodeschool/core-stream-adventure/04-transform.js:4
//         this.push(buffer.toString().toUpperCase());
//
