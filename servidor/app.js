const express = require('express')
const app = express()
const cors = require('cors')
const productsRoutes = require('./productos/rutas')

app.use(cors())

app.use('/products', productsRoutes)








app.listen(4000, (req,res) =>{
    console.log('Servidor corriendo en puerto 4000')
})