const router = require("express").Router();
const leagueRoutes = require("./league-route");
const teamRoutes = require("./team-route");
const MatchRoutes = require("./match-route");
const resultsRoutes = require("./results-route");

router.use("/league", leagueRoutes);
router.use("/team", teamRoutes);
router.use("/match", MatchRoutes);
router.use("/result", resultsRoutes);

module.exports = router;
