const router = require('express').Router();
const leagueRoutes = require('./league-routes');
const teamRoutes = require('./team-routes');
const gameRoutes = require('./game-routes');

router.use('/league', leagueRoutes);
router.use('/team', teamRoutes);
router.use('/game', gameRoutes);

module.exports = router;