'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Members.hasMany(models.Users, {
        foreignKey: "memberId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

    }
  }
  Members.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    schoolId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};