const {Router} = require('express')
const router = Router()
const controller = require('../Controller/controllerExport')

router.post('/export', controller.export)

module.exports = router