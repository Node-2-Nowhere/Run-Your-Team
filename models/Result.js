const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Result extends Model {}

Result.init(
  {
    result_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    home_win: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    away_win: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    match_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "matches",
        key: "match_id",
      },
    },
  },
  {
    sequelize,
    modelName: "result",
    underscored: true,
  }
);

module.exports = Result;
