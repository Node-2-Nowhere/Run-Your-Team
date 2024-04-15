const { Result } = require("../models");

const resultsData = [
  {
    home_win: 1,
    away_win: 0,
    match_id: 1,
  },
  {
    home_win: 0,
    away_win: 1,
    match_id: 2,
  },
];
console.log("------------------")
console.log(Result);
const seedResults = () => Result.bulkCreate(resultsData);

module.exports = seedResults;
