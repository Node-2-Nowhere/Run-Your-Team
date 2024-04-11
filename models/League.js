
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class League extends Model {}

League.init({
  league_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  league_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
    sequelize,
    modelName: 'league',
  },
);

module.exports = League;
