const crypto = require('crypto');

let passphrase = process.argv[2].toString();
let decipher = crypto.createDecipher('aes256', passphrase);

process.stdin.pipe(decipher).pipe(process.stdout);
