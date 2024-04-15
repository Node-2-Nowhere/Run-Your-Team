const { Match } = require("../models");

const matchData = [
  {
    match_date: 3 / 28 / 24,
    home_team_id: 2,
    away_team_id: 3,
  },
  {
    match_date: 4 / 2 / 24,
    home_team_id: 1,
    away_team_id: 2,
  },
  {
    match_date: 4 / 5 / 24,
    home_team_id: 3,
    away_team_id: 4,
  },
];

const seedMatch = () => Match.bulkCreate(matchData);

module.exports = seedMatch;
