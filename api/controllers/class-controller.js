const database = require('../models');

class ClassController {

    static async getAllClasses(req, res) {
        try {
            const classes = await database.Classes.findAll()
            return res.status(200).json(classes)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}