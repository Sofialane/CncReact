const express = require('express')
const router = express.Router()
const productosController = require('./controller')

router.get('/', productosController.getProducts)



module.exports = router

