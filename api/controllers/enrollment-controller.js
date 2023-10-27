const Sequelize = require('sequelize')
const {EnrollmentService} = require('../services/');
const enrollmentService = new EnrollmentService();

class EnrollmentController {

    static async getAllEnrollmentByClass(req, res) {
        const {classId} = req.params;
        try {
            const enrollments = await enrollmentService.findAndCountRegisters(
                {class_id: Number(classId), status: 'confirmed'},
                {limit: 20, order: [['student_id', 'ASC']]}
            );

            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getCrowdedClasses(req, res) {
        const classCapacity = 2;

        try {
            const crowdedClasses = await enrollmentService.findAndCountRegisters(
                {status: 'confirmed'},
                {
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
            const enrollment = await enrollmentService.getRegister(
                {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)

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
            const newEnrollmentCreated = await enrollmentService.createRegister(newEnrollment);
            return res.status(200).json(newEnrollmentCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateEnrollment(req, res) {
        const {studentId, enrollmentId} = req.params;
        const newInfo = {...req.body, student_id: Number(studentId)};
        try {
            await enrollmentService.updateRegisters(newInfo,
                {
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                }
            );
            return res.status(200).json({message: `enrollment id: ${enrollmentId} updated`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteEnrollment(req, res) {
        const {enrollmentId} = req.params;
        try {
            await enrollmentService.deleteRegister(Number(enrollmentId));
            return res.status(200).json({message: `enrollment id: ${enrollmentId} deleted`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = EnrollmentController;