const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/meseros', require('./routes/mesero'));
app.use('/api/ordenes',require('./routes/ordenes'))
app.use('/api/platillos',require('./routes/platillos'))



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})