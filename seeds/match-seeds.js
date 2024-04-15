const { Match } = require("../models");

const matchData = [
  {
    match_date: "2024-03-28",
    home_team_id: 1,
    away_team_id: 2,
  },
  {
    match_date: "2024-04-02",
    home_team_id: 2,
    away_team_id: 1,
  },
  {
    match_date: "2024-03-28",
    home_team_id: 1,
    away_team_id: 2,
  },
  {
    match_date: "2024-03-28",
    home_team_id: 1,
    away_team_id: 2,
  },
  {
    match_date: "2024-03-28",
    home_team_id: 1,
    away_team_id: 2,
  },
  {
    match_date: "2024-03-28",
    home_team_id: 1,
    away_team_id: 2,
  },
];

const seedMatch = () => Match.bulkCreate(matchData);

module.exports = seedMatch;
