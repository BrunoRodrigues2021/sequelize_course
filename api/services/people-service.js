const database = require('../models');
const Services = require('./general-service');

class PeopleService extends Services {
    constructor() {
        super('People');
        this.enrollmentService = new Services('Enrollments');
    }

    async getAllPeople(where = {}) {
        return database[this.modelName]
            .scope('all')
            .findAll({
                where: {
                    ...where
                }
            });
    }

    async getAllActivePeople(where = {}) {
        return database[this.modelName].findAll({
            where: {
                ...where
            }
        });
    }

    async updatePerson(newData, id, transaction = {}) {
        return database[this.modelName].scope('all').update(newData, {where: {id}}, transaction);
    }

    async restorePerson(id) {
        return database[this.modelName].scope('all').restore({where: {id}});
    }

    async deletePerson(id) {
        return database[this.modelName].scope('all').destroy({where: {id}});
    }

    async cancelPeopleAndEnrollmentsRelated(studentId) {
        database.sequelize.transaction(async transaction => {
            await super.updateRegister({active: false}, {id: studentId}, {transaction})
            await this.enrollmentService.updateRegisters({status: 'canceled'}, {student_id: studentId}, {transaction});
        });
    }

    async getEnrollmentsByPerson(where = {}) {
        const enrollments = await database[this.modelName].scope('all').findOne({where: {...where}});

        return enrollments.getEnrolledClasses()
    }

}

module.exports = PeopleService;