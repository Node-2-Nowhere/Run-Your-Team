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
    match_date: {
      type: DataTypes.DATE, // Need to set up date format
      allowNull: false,
    },
    home_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "team", key: "team_id" },
    },
    away_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "team", key: "team_id" },
    },
  },
  {
    sequelize,
    modelName: "match",
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Match;
