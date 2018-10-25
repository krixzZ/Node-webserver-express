const http = require('http');


// escuchamos todas las peticiones, no importa de que path vengan
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Cristian',
            edad: 37,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');