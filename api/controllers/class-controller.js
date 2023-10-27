const Sequelize = require('sequelize');
const {ClassService} = require('../services');
const Op = Sequelize.Op;

const classService = new ClassService();

class ClassController {

    static async getAllClasses(req, res) {
        const {startDate, endDate} = req.query;
        const where = {};

        if (startDate && endDate) {
            where.start_date = {
                [Op.between]: [startDate, endDate]
            }
        }

        try {
            const classes = await classService.getAllRegisters(where)
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getClass(req, res) {
        const {id} = req.params;
        try {
            const myClass = await classService.getRegister(Number(id));
            return res.status(200).json(myClass);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createClass(req, res) {
        const newClass = req.body;
        try {
            const newClassCreated = await classService.createRegister(newClass);
            return res.status(200).json(newClassCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateClass(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await classService.updateRegister(newInfo, Number(id));
            return res.status(200).json({message: `class id: ${id} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteClass(req, res) {
        const {id} = req.params;
        try {
            await classService.deleteRegister(Number(id));
            return res.status(200).json({message: `class id: ${id} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = ClassController;