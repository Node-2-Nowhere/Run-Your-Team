const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Results extends Model {}

Results.init(
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
    game_played: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "results",
    underscored: true,
  }
);

module.exports = Results;
