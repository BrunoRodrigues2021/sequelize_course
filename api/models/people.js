'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      // define association here
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