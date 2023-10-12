const database = require('../models');

class PeopleController {

    static async getAllPeople(req, res) {
        try {
            const people = await database.People.findAll();
            return res.status(200).json(people);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPerson(req, res) {
        const {id} = req.params;
        try {
            const person = await database.People.findOne({where: Number(id)});
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body;
        try {
            const newPersonCreated = await database.People.create(newPerson);
            return res.status(200).json(newPersonCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await database.People.update(newInfo, {where: {id: Number(id)}});
            return res.status(200).json({message: `person id: ${id} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        const {id} = req.params;
        try {
            await database.People.destroy({where: {id: Number(id)}});
            return res.status(200).json({message: `person id: ${id} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


}

module.exports = PeopleController;