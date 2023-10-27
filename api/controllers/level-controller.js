const {LevelService} = require("../services");
const levelService = new LevelService();

class LevelController {

    static async getAllLevels(req, res) {
        try {
            const levels = await levelService.getAllRegisters();
            return res.status(200).json(levels)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getLevel(req, res) {
        const {id} = req.params;
        try {
            const level = await levelService.getRegister(Number(id));
            return res.status(200).json(level);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createLevel(req, res) {
        const newLevel = req.body;
        try {
            const newLevelCreated = await levelService.createRegister(newLevel);
            return res.status(200).json(newLevelCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLevel(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await levelService.updateRegister(newInfo, Number(id));
            return res.status(200).json({message: `level id: ${id} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLevel(req, res) {
        const {id} = req.params;
        try {
            await levelService.deleteRegister(Number(id));
            return res.status(200).json({message: `level id: ${id} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = LevelController;