const { Match } = require("../models");

const matchData = [];

const seedMatch = () => Match.bulkCreate(matchData);

module.exports = seedMatch;
