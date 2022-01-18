const express = require('express')
const router = express.Router()
const formularioController = require('./controller')

router.post('/', formularioController.postFormulario)



module.exports = router