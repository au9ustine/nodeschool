let Hapi = require('hapi');

(async () => {
    let server = new Hapi.Server({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    
    server.route({
        path: '/',
        method:'GET',
        handler: (req, h) => {
            return 'Hello hapi';
        }
    });
    
    await server.start();
    console.log('Server running at:', server.info.uri);
})();

