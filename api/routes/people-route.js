const {Router} = require('express');
const PeopleController = require('../controllers/people-controller');
const EnrollmentController = require('../controllers/enrollment-controller');

const router = Router();

router.get('/people', PeopleController.getAllPeople);
router.get('/people/active', PeopleController.getAllActivePeople);
router.get('/people/:id', PeopleController.getPerson);
router.post('/people', PeopleController.createPerson);
router.put('/people/:id', PeopleController.updatePerson);
router.post('/people/:id/restore', PeopleController.restorePerson);
router.delete('/people/:id', PeopleController.deletePerson);
router.get('/people/:studentId/enrollment', PeopleController.getPersonEnrollments);
router.post('/people/:id/cancel', PeopleController.cancelPersonAndEnrollmentsRelated);
router.get('/people/enrollment/:classId/confirmed', EnrollmentController.getAllEnrollmentByClass);
router.get('/people/enrollment/class/crowded', EnrollmentController.getCrowdedClasses);
router.get('/people/:studentId/enrollment/:enrollmentId', EnrollmentController.getEnrollment);
router.post('/people/:studentId/enrollment', EnrollmentController.createEnrollment);
router.put('/people/:studentId/enrollment/:enrollmentId', EnrollmentController.updateEnrollment);
router.delete('/enrollment/:enrollmentId', EnrollmentController.deleteEnrollment);

module.exports = router;