const { Team } = require("../models");

const teamData = [
  {
    team_name: "Wombats",
    league_id: 1,
    games_played: 8,
    games_won: 4,
  },
  {
    team_name: "Squirrels",
    league_id: 1,
    games_played: 8,
    games_won: 4,
  },
  {
    team_name: "Panda",
    league_id: 1,
    games_played: 8,
    games_won: 3,
  },
  {
    team_name: "Colts",
    league_id: 1,
    games_played: 8,
    games_won: 5,
  },
  {
    team_name: "Pigeons",
    league_id: 1,
    games_played: 8,
    games_won: 6,
  },
  {
    team_name: "Seagulls",
    league_id: 1,
    games_played: 8,
    games_won: 3,
  },
  {
    team_name: "Orcas",
    league_id: 1,
    games_played: 8,
    games_won: 5,
  },
  {
    team_name: "Elephants",
    league_id: 1,
    games_played: 8,
    games_won: 2,
  },
];

const seedTeam = () => Team.bulkCreate(teamData);

module.exports = seedTeam;
