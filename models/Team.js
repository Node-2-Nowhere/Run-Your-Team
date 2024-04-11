
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}


Team.init( {

    team_name: {
        type: DataTypes.STRING,
        allowNull: false, 
        primaryKey: true,
        unique: true, 
    },
    game_win: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    games_played: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
       league_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model:"league", key:"id" }
    },

},
{
    sequelize,
    modelName: 'team',
  }

);




module.exports = Team;