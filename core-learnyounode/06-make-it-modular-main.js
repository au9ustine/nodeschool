var make_it_modular = require('./make-it-modular');
make_it_modular(process.argv[2], process.argv[3], (err, data) => {
    if (err) { console.error(err); }
    data.forEach(f => console.log(f));
});
