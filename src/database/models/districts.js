'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Districts.belongsTo(models.Provinces, {
        foreignKey: "provinceId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Districts.init({
    districtName: DataTypes.STRING,
    provinceId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Districts',
  });
  return Districts;
};