var express = require('express');
var router = express.Router();
const controllerMvc = require('../controllers/mainController')

router.get('/', controllerMvc.index);
router.get('/about', controllerMvc.about)

module.exports = router;
