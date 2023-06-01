'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commitees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Commitees.init({
    userId: DataTypes.STRING,
    role: DataTypes.STRING,
    schoolId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commitees',
  });
  return Commitees;
};