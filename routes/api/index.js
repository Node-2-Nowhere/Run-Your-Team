const router = require("express").Router();
const leagueRoutes = require("./league-route");
const teamRoutes = require("./team-route");
const gameRoutes = require("./game-route");
const resultsRoutes = require("./results-route");

router.use("/league", leagueRoutes);
router.use("/team", teamRoutes);
router.use("/game", gameRoutes);
router.use("/results", resultsRoutes);

module.exports = router;
