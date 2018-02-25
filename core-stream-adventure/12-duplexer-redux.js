const dup = require('duplexer2');
const through = require('through2').obj;

module.exports = (counter) => {
    let counts = {};

    let write = (row, _, next) => {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    };

    let end = (done) => {
        counter.setCounts(counts);
        done();
    };

    let input = through(write, end);
    return dup({
        objectMode: true
    }, input, counter);
};
