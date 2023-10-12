const database = require('../models');

class LevelController {

    static async getAllLevels(req, res) {
        try {
            const levels = await database.Levels.findAll()
            return res.status(200).json(levels)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}