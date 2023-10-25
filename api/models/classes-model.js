const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Classes extends Model {
        static associate(models) {
            this.hasMany(models.Enrollments, {
                foreignKey: 'class_id'
            });
            this.belongsTo(models.People, {
                foreignKey: 'instructor_id'
            });
            this.belongsTo(models.Levels, {
                foreignKey: 'level_id'
            });
        }
    }

    Classes.init({
        start_date: DataTypes.DATEONLY
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Classes',
    });

    return Classes;
};