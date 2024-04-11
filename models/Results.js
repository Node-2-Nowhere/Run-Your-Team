const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Results extends Model {}

Results.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    home_win: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {},
    },
    away_win: {
      types: DataTypes.INTEGER,
      allowNull: false,
      reference: {},
    },
  },
  {
    sequelize,
    modelName: "results",
  }
);

module.exports = Results;
