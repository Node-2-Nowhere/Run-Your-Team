const { Result } = require("../models");

const resultsData = [
  {
    win: 1,
    team_id: 1,
    match_id: 1,
  },
  {
    win: 1,
    team_id: 2,
    match_id: 2,
  },
  {
    win: 1,
    team_id: 2,
    match_id: 3,
  },
  {
    win: 1,
    team_id: 2,
    match_id: 4,
  },
  {
    win: 1,
    team_id: 2,
    match_id: 5,
  },
  {
    win: 1,
    team_id: 1,
    match_id: 6,
  },
];
console.log("------------------")
console.log(Result);
const seedResults = () => Result.bulkCreate(resultsData);

module.exports = seedResults;
