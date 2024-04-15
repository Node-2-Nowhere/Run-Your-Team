const { Result } = require("../models");

const resultsData = [
    {   
        home_win: true, 
        away_win: false, 
        game_played: true,
    },
    {
        home_win:  false, 
        away_win: true, 
        game_played: true, 
    },
];

const seedResults = () => Results.bulkCreate(resultsData);

module.exports = seedResults;
