'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Members, {
        foreignKey: "memberId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Users.belongsTo(models.Schools, {
        foreignKey: "schoolId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      // Users.belongsTo(models.Districts, {
      //   foreignKey: "districtId",
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE",
      // });
    }
  }
  Users.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    districtId: DataTypes.STRING,
    memberId: DataTypes.STRING,
    schoolId: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};