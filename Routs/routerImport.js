const {Router} = require('express')
const router = Router()
const controller = require('../Controller/controllerImport')

router.post('/import', controller.import)

module.exports = router