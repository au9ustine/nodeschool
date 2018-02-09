const net = require('net');
const strftime = require('strftime');

let server = net.createServer(socket => {
    socket.write(strftime('%Y-%m-%d %H:%M'));
    socket.end('\n');
});

server.listen(process.argv[2]);
