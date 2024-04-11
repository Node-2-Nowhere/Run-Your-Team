const { Team } = require("../models");

const teamData = [];

const seedTeam = () => Team.bulkCreate(teamData);

module.exports = seedTeam;
