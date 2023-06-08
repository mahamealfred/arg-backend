'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schools.hasMany(models.Users, {
        foreignKey: "schoolId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Schools.hasMany(models.Families, {
        foreignKey: "schoolId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Schools.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    districtId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schools',
  });
  return Schools;
};