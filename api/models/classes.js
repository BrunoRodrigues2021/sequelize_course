'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Classes extends Model {
        associate(models) {
            Classes.hasMany(models.Enrollments);
            Classes.belongsTo(models.People);
            Classes.belongsTo(models.Levels);
        }
    }

    Classes.init({
        start_date: DataTypes.DATEONLY
    }, {
        sequelize,
        modelName: 'classes',
    });

    return Classes;
};