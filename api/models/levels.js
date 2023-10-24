const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Levels extends Model {
        static associate(models) {
            this.hasMany(models.Classes,{
                foreignKey: 'level_id'
            });
        }
    }

    Levels.init({
        description_level: DataTypes.STRING
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Levels',
    });

    return Levels;
};