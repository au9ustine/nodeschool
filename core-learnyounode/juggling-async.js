const http = require('http');
const bl = require('bl');
let lines = [];
let count = 0;

process.argv.slice(2).forEach((url, i) => {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            lines[i] = data.toString();
            count += 1;
            if (count === 3) {
                lines.forEach(line => console.log(line));
            }
        }));
    });
});
