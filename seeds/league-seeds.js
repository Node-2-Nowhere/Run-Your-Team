const { League } = require("../models");

const leagueData = [
  {
    league_name: League1,
  },
];

const seedLeague = () => League.bulkCreate(leagueData);

module.exports = seedLeague;
