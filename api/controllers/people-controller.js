const {PeopleService} = require('../services/');
const peopleService = new PeopleService();

class PeopleController {

    static async getAllPeople(req, res) {
        try {
            const people = await peopleService.getAllPeople();
            return res.status(200).json(people);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getAllActivePeople(req, res) {
        try {
            const activePeople = await peopleService.getAllActivePeople();
            return res.status(200).json(activePeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPerson(req, res) {
        const {id} = req.params;
        try {
            const person = await peopleService.getRegister(Number(id));
            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPerson(req, res) {
        const newPerson = req.body;
        try {
            const newPersonCreated = await peopleService.createRegister(newPerson);
            return res.status(200).json(newPersonCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req, res) {
        const {id} = req.params;
        const newInfo = req.body;
        try {
            await peopleService.updatePerson(newInfo, Number(id));
            return res.status(200).json({message: `person id: ${id} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restorePerson(req, res) {
        const {id} = req.params;
        try {
            await peopleService.restorePerson(Number(id))
            return res.status(200).json({message: `person id ${id} restored`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        const {id} = req.params;
        try {
            await peopleService.deletePerson(Number(id));
            return res.status(200).json({message: `person id: ${id} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPersonEnrollments(req, res) {
        const {studentId} = req.params;
        try {
            const enrollments = await peopleService.getEnrollmentsByPerson({ id: Number(studentId) });

            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cancelPersonAndEnrollmentsRelated(req, res) {
        const {id} = req.params;

        try {
            await peopleService.cancelPeopleAndEnrollmentsRelated(Number(id));

            return res.status(200).json({message: `enrollments relating to the student id: ${id} canceled`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController;