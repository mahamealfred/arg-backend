'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Families extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Families.init({
    name: DataTypes.STRING,
    parents: DataTypes.ARRAY,
    members: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Families',
  });
  return Families;
};