const { Results } = require("../models");

const resultsData = [];

const seedResults = () => Results.bulkCreate(resultsData);

module.exports = seedResults;
