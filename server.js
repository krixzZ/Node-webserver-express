const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// middleware para que se ejecute no importa lo que se pida
// se sirve un folder estatico
app.use(express.static(__dirname + '/public'));

// setea template por defecto
// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Cristian',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

// ojo: puede chocar con static
// app.get('/', (req, res) => {
//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Cristian',
//         edad: 37,
//         url: req.url
//     };

//     // send serializa automaticamente el objeto a JSON!!!
//     // no necesita end!!!
//     res.send(salida);
// });

// app.get('/data', (req, res) => {

//     res.send('Hola Data');
// });

// recibe un callback
app.listen(port, () => {
    console.log('Escuchando en el puerto' + port);
});