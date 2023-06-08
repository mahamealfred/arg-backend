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
      Families.belongsTo(models.Schools, {
        foreignKey: "schoolId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Families.init({
    name: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    motherName: DataTypes.STRING,
    schoolId: DataTypes.STRING,
    members: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Families',
  });
  return Families;
};