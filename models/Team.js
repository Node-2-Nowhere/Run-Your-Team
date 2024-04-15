const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Team extends Model {}

Team.init(
  {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    league_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "leagues", key: "id" },
    },
    // win_count: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true, // need to figure out how to aggregate win count still... might need a through table
    // },
    // games_played: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: { model: "results", key: "game_played" }, //Maybe? need a count function
    // },
  },
  {
    sequelize,
    modelName: "team",
    underscored: true,
  }
);

module.exports = Team;
