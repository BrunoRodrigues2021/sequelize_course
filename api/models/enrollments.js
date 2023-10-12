'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Enrollments extends Model {
        associate(models) {
            Enrollments.belongsTo(models.People);
            Enrollments.belongsTo(models.Classes);
        }
    }

    Enrollments.init({
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'enrollments',
    });

    return Enrollments;
};