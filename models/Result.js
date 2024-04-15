const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Result extends Model {}

Result.init(
  {
    match_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    home_win: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    away_win: {
      types: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "results",
    underscored: true,
  }
);

module.exports = Result;
