const database = require('../models');

class ClassController {

    static async getAllClasses(req, res) {
        try {
            const classes = await database.Classes.findAll();
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getClass(req, res) {
        const {id} = req.params;
        try {
            const myClass = await database.Classes.findOne({where: Number(id)});
            return res.status(200).json(myClass);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createClass(req, res) {
        const newClass = req.body;
        try {
            const newClassCreated = await database.Classes.create(newClass);
            return res.status(200).json(newClassCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateClass(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await database.Classes.update(newInfo, {where: {id: Number(id)}});
            return res.status(200).json({message: `class id: ${id} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteClass(req, res) {
        const {id} = req.params;
        try {
            await database.Classes.destroy({where: {id: Number(id)}});
            return res.status(200).json({message: `class id: ${id} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = ClassController;