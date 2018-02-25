const concat = require('concat-stream');
const crypto = require('crypto');
const tar = require('tar');
const zlib = require('zlib');

let cipherName = process.argv[2];
let passphrase = process.argv[3];
let decipher = crypto.createDecipher(cipherName, passphrase);
let parser = new tar.Parse();
parser.on('entry', function (e) {
    if (e.type !== 'File') return e.resume();
    e.pipe(crypto.createHash('md5', {
        encoding: 'hex'
    })).pipe(concat(function (hash) {
        console.log(hash + ' ' + e.path);
    }));
});

process.stdin
    .pipe(decipher)
    .pipe(zlib.createGunzip())
    .pipe(parser);
