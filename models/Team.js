//team_id
//team name
// wins
// losses
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Mdoel {}


Team.init( {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    team_name: {
        type: DataTypes.STRING,
        allowNull: false, 
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