const express = require('express');
let app = express();

app.get('/search', (req, res) => {
    res.send(JSON.stringify(req.query));
});

app.listen(process.argv[2]);
