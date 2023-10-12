const {Router} = require('express')
const LevelController = require('../controllers/level-controller')

const router = Router();

router.get('/levels', LevelController.getAllLevels);
router.get('/levels/:id', LevelController.getLevel);
router.post('/levels', LevelController.createLevel);
router.put('/levels/:id', LevelController.updateLevel);
router.delete('/levels/:id', LevelController.deleteLevel);

module.exports = router;