const remote = require('electron').remote;
const fs = require('fs');

let picture = require('cat-picture');
let src = picture.src;
picture.remove();

let image = require('lightning-image-poly');
let viz = new image('#visualization', null, [src], {
    hullAlgorithm: 'convex'
});

function save() {
    remote.getCurrentWebContents().printToPDF({
        portrait: true
    }, function (err, data) {
        fs.writeFile('annotation.pdf', data, function (err) {
            if (err) alert('error generating pdf! ' + err.message);
            else alert('pdf saved!');
        });
    });
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 80) save();
});
