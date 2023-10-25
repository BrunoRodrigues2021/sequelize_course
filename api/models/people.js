const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class People extends Model {
        static associate(models) {
            this.hasMany(models.Classes, {
                foreignKey: 'instructor_id'
            });
            this.hasMany(models.Enrollments, {
                foreignKey: 'student_id'
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
        paranoid: true,
        defaultScope: {
            where: {
                active: true
            }
        },
        scopes: {
            all: {
                where: {}
            }
        },
        modelName: 'People',
    });
    return People;
};