const React = require('react');
const ReactDOMServer = require('react-dom/server');
const DOM = require('react-dom-factories');
let body = DOM.body;
let div = DOM.div;
let script = DOM.script;

const browserify = require('browserify');
const babelify = require('babelify');

const express = require('express');
let app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({
    transformViews: false
}));

require('babel/register');

const TodoBox = require('./views/08-isomorphic.jsx');

let data = [{
    title: 'Shopping',
    detail: process.argv[3]
}, {
    title: 'Hair cut',
    detail: process.argv[4]
}];

app.use('/bundle.js', function (req, res) {
    res.setHeader('Content-Type', 'application/javascript');

    browserify('./08-isomorphic-app.js')
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(res);
});

app.use('/', function (req, res) {
    var initialData = JSON.stringify(data);
    var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {
        'data': data
    }));

    res.setHeader('Content-Type', 'text/html');

    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        div({
            id: 'app',
            dangerouslySetInnerHTML: {
                __html: markup
            }
        }),
        script({
            id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
        }),
        script({
            src: '/bundle.js'
        })
    ));

    res.end(html);
});

app.listen(app.get('port'), function () {
    console.log('Express server is up on port 3000');
});
