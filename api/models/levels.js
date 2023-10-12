'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Levels extends Model {
        associate(models) {
            Levels.hasMany(models.Classes);
        }
    }

    Levels.init({
        description_level: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'levels',
    });

    return Levels;
};