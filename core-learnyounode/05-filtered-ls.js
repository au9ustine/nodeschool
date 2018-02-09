var fs = require('fs');

fs.readdir(process.argv[2], (err, data) => {
    data.filter(x => x.includes('.' + process.argv[3]))
        .forEach(x => console.log(x));
});
