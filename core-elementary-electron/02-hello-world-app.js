const electron = require('electron');

electron.app.on('ready', function () {
    var mainWindow = new electron.BrowserWindow({
        width: 600,
        height: 800
    });
    mainWindow.loadURL('file://' + __dirname + '/02-hello-world-index.html');
});
