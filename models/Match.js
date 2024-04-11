//game_id primary key
//team _id
// score
// w/l
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
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
