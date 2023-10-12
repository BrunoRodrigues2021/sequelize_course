'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class People extends Model {
        associate(models) {
            People.hasMany(models.Classes, {
                foreignKey: 'instructorId'
            });
            People.hasMany(models.Enrollments, {
                foreignKey: 'studentId'
            });
        }
    }

    People.init({
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        mail: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'People',
    });
    return People;
};