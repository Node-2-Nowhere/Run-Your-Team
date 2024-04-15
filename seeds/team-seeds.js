const { Team } = require("../models");

const teamData = [
  {
    team_name: "Wombats",
    league_id: 1,
  },
  {
    team_name: "Squirrels",
    league_id: 1,
  },
  // {
  //   team_name: "Pigeons",
  //   league_id: 1,
  //   win_count: 1,
  //   games_played: 4,
  // },
  // {
  //   team_name: "Seagulls",
  //   league_id: 1,
  //   win_count: 2,
  //   games_played: 4,
  // },
  // {
  //   team_name: "Orcas",
  //   league_id: 1,
  //   win_count: 3,
  //   games_played: 4,
  // },
  // {
  //   team_name: "Elephants",
  //   league_id: 1,
  //   win_count: 1,
  //   games_played: 4,
  // },
];

const seedTeam = () => Team.bulkCreate(teamData);

module.exports = seedTeam;
