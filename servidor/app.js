const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const productsRoutes = require('./productos/rutas')

const formularioRoutes = require ('./formulario/rutas')

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use('/products', productsRoutes)


app.use('/formulario', formularioRoutes)





app.listen(4000, (req,res) =>{
    console.log('Servidor corriendo en puerto 4000')
})