const express = require('express');
const stylus = require('stylus');
let app = express();

app.use(stylus.middleware(process.argv[3])); // css
app.use(express.static(process.argv[3])); // index template

app.listen(process.argv[2]);
