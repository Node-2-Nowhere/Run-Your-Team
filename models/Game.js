//game_id primary key
//team _id
// score
// w/l
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "team", key: "id" },
    },
    win: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "game_results", key: "home_win", unique: "false" },
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "game_results", key: "id" },
    },
  },
  {
    sequelize,
    modelName: "game",
  }
);

module.exports = Game;
