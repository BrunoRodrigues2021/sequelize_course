const database = require('../models');
const Sequelize = require('sequelize');

class PeopleController {

    static async getAllPeople(req, res) {
        try {
            const people = await database.People.scope('all').findAll();
            return res.status(200).json(people);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getAllActivePeople(req, res) {
        try {
            const activePeople = await database.People.findAll();
            return res.status(200).json(activePeople);
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

    static async restorePerson(req, res) {
        const {id} = req.params;
        try {
            await database.People.restore(
                {
                    where: {
                        id: Number(id)
                    }
                }
            );
            return res.status(200).json({message: `person id ${id} restored`});
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

    static async getAllEnrollment(req, res) {
        const {studentId} = req.params;
        try {
            const people = await database.People.findOne({
                where: {
                    id: Number(studentId)
                }
            });
            const enrollments = await people.getEnrolledClasses();

            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getAllEnrollmentByClass(req, res) {
        const {classId} = req.params;
        try {
            const enrollments = await database.Enrollments.findAndCountAll({
                where: {
                    class_id: Number(classId),
                    status: 'confirmed'
                },
                limit: 20,
                order: [['student_id', 'ASC']]
            });

            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getCrowdedClasses(req, res) {
        const classCapacity = 2;
        try {
            const crowdedClasses = await database.Enrollments.findAndCountAll({
               where: {
                   status: 'confirmed'
               },
                attributes: ['class_id'],
                group: ['class_id'],
                having: Sequelize.literal(`COUNT(class_id) >= ${classCapacity}`)
            });

            return res.status(200).json(crowdedClasses.count);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEnrollment(req, res) {
        const {studentId, enrollmentId} = req.params;
        try {
            const enrollment = await database.Enrollments.findOne(
                {
                    where: {
                        id: Number(enrollmentId),
                        student_id: Number(studentId)
                    }
                }
            );
            return res.status(200).json(enrollment);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createEnrollment(req, res) {
        const {studentId} = req.params;
        const newEnrollment = {...req.body, student_id: Number(studentId)};
        try {
            const newEnrollmentCreated = await database.Enrollments.create(newEnrollment);
            return res.status(200).json(newEnrollmentCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateEnrollment(req, res) {
        const {studentId, enrollmentId} = req.params;
        const newInfo = {...req.body, student_id: Number(studentId)};
        try {
            await database.Enrollments.update(newInfo,
                {
                    where: {
                        id: Number(enrollmentId),
                        student_id: Number(studentId)
                    }
                }
            );
            return res.status(200).json({message: `enrollment id: ${enrollmentId} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteEnrollment(req, res) {
        const {studentId, enrollmentId} = req.params;
        try {
            await database.Enrollments.destroy({
                where: {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                }
            });
            return res.status(200).json({message: `enrollment id: ${enrollmentId} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PeopleController;