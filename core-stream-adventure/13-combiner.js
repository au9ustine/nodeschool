const combine = require('stream-combiner');
const split = require('split');
const through = require('through2');
const zlib = require('zlib');

module.exports = () => {
    let current = '';

    let chunk = through(
        // Writable Stream - transform function
        //
        // Note:
        //     The reason why the arrow function cannot be applied here due to 
        //     [this issue](https://github.com/rvagg/through2/issues/85). The arrow
        //     function has its own definition of `this', which cannot make it work
        //     when using `this.push' inside of arrow function.
        //
        function (line, _, next) {
            if (line.length === 0)
                return next();

            let row = JSON.parse(line);
            if (row.type === 'genre') {
                if (current)
                    this.push(JSON.stringify(current) + '\n');
                current = {
                    name: row.name,
                    books: []
                };
            } else if (row.type === 'book') {
                current.books.push(row.name);
            }
            next();
        },
        // Writable Stream - flush function
        function (next) {
            if (current)
                this.push(JSON.stringify(current) + '\n');
            next();
        }
    );

    return combine(split(), chunk, zlib.createGzip());
};
