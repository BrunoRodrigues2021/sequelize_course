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

    static async getLevel(req, res) {
        const {id} = req.params;
        try {
            const level = await database.Levels.findOne({where: Number(id)});
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createLevel(req, res) {
        const newLevel = req.body;
        try {
            const newLevelCreated = await database.Levels.create(newLevel);
            return res.status(200).json(newLevelCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLevel(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await database.Levels.update(newInfo, {where: {id: Number(id)}});
            return res.status(200).json({message: `level id: ${id} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLevel(req, res) {
        const {id} = req.params;
        try {
            await database.Levels.destroy({where: {id: Number(id)}});
            return res.status(200).json({message: `level id: ${id} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = LevelController;