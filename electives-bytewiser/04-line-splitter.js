const fs = require('fs');

let file = fs.readFileSync(process.argv[2]);
let offset = 0;
for (var i = 0; i < file.length; i++) {
    if (file[i] === '\n'.charCodeAt(0)) {
        console.log(file.slice(offset, i));
        i++;
        offset = i;
    }
}
console.log(file.slice(offset, i));

// IMHO: This piece of code is a piece of shit, I don't think Buffer is not the best way solving this problem.
