const Match = require("./Match");
const League = require("./League");
const Team = require("./Team");
const Results = require("./Result");

League.hasMany(Team, {
  foreignKey: "league_id",
});

Team.belongsTo(League, {
  foreignKey: "league_id",
});

Team.hasMany(Match, {
  foreignKey: "match_id",
});

Match.belongsTo(Team, {
  foreignKey: "team_id",
});

Results.belongsTo(Match, {
  foreignKey: "match_id",
});

module.exports = { Match, League, Team, Results };

//test testgut
