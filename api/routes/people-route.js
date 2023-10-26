const {Router} = require('express');
const PeopleController = require('../controllers/people-controller');

const router = Router();

router.get('/people', PeopleController.getAllActivePeople);
router.get('/people/all', PeopleController.getAllPeople);
router.get('/people/:id', PeopleController.getPerson);
router.post('/people', PeopleController.createPerson);
router.put('/people/:id', PeopleController.updatePerson);
router.post('/people/:id/cancel', PeopleController.cancelPersonAndEnrollmentsRelated);
router.post('/people/:id/restore', PeopleController.restorePerson);
router.delete('/people/:id', PeopleController.deletePerson);
router.get('/people/:studentId/enrollment', PeopleController.getAllEnrollment);
router.get('/people/enrollment/:classId/confirmed', PeopleController.getAllEnrollmentByClass);
router.get('/people/enrollment/class/crowded', PeopleController.getCrowdedClasses);
router.get('/people/:studentId/enrollment/:enrollmentId', PeopleController.getEnrollment);
router.post('/people/:studentId/enrollment', PeopleController.createEnrollment);
router.put('/people/:studentId/enrollment/:enrollmentId', PeopleController.updateEnrollment);
router.delete('/people/:studentId/enrollment/:enrollmentId', PeopleController.deleteEnrollment);

module.exports = router;