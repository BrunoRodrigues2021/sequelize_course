const {Router} = require('express')
const LevelController = require('../controllers/level-controller')

const router = Router()

router.get('/people', LevelController.getAllLevels);

module.exports = router;