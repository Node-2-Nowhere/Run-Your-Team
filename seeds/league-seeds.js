const { League } = require("../models");

const leagueData = [];

const seedLeague = () => League.bulkCreate(leagueData);

module.exports = seedLeague;
