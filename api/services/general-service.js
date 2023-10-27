const database = require('../models');

class GeneralService {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAllRegisters(where = {}) {
        return database[this.modelName].findAll({where: {...where}});
    }

    async getRegister(where = {}) {
        return database[this.modelName].findOne({where: {...where}});
    }

    async createRegister(data) {
        return database[this.modelName].create(data);
    }

    async updateRegister(newData, id, transaction = {}) {
        return database[this.modelName].update(newData, {where: {id}}, transaction);

    }

    async updateRegisters(newData, where, transaction = {}) {
        return database[this.modelName].update(newData, {where: {...where}}, transaction);

    }

    async restoreRegister(id) {
        return database[this.modelName].restore({where: {id: id}})
    }

    async deleteRegister(id) {
        return database[this.modelName].destroy({where: {id}});
    }

    async findAndCountRegisters(where = {}, aggregators) {
        return database[this.modelName]
            .findAndCountAll({where: {...where}, ...aggregators})
    }
}

module.exports = GeneralService;