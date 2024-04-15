const Match = require("./Match");
const League = require("./League");
const Team = require("./Team");
const Result = require("./Result");

League.hasMany(Team, {
  foreignKey: "league_id",
});

Team.belongsTo(League, {
  foreignKey: "league_id",
});

// Team.hasMany(Match, {
//   foreignKey: "team_id",
// });

// Match.hasMany(Team, {
//   foreignKey: "team_id",
// });

// Result.belongsTo(Match, {
//   foreignKey: "match_id",
// });

// Result.belongsTo(Team, {
//   foreignKey: "team_id",
// });

Team.belongsToMany(Match, {
  through: "result",
});

Match.belongsToMany(Team, {
  through: "result",
});

module.exports = { Match, League, Team, Result };

//test testgut
