const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Match extends Model {}

Match.init(
  {
    match_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    home_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "team", key: "id" },
    },
    away_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "team", key: "id" },
    },
    win: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "game",
  }
);

module.exports = Match;
