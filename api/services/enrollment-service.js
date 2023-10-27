const Services = require('./general-service');

class EnrollmentService extends Services {
    constructor() {
        super('Enrollments');
    }
}

module.exports = EnrollmentService;