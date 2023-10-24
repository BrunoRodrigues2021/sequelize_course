const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Enrollments extends Model {
        static associate(models) {
            this.belongsTo(models.People, {
                foreignKey: 'student_id'
            });
            this.belongsTo(models.Classes, {
                foreignKey: 'class_id'
            });
        }
    }

    Enrollments.init({
        status: DataTypes.STRING
    }, {
        sequelize,
        paranoid: true,
        modelName: 'Enrollments',
    });

    return Enrollments;
};