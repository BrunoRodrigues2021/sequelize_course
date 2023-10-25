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
        name: {
            type: DataTypes.STRING,
            validate: {
                nameValidator: function(name) {
                    if (name.length < 3) throw new Error('Name is too short. The name should be bigger than 3 characters');
                }
            }
        },
        active: DataTypes.BOOLEAN,
        mail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'invalid email'
                }
            }
        },
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