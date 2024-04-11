const router = require("express").Router();
const { Team, League } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const leagueData = await League.findAll({
        include: [{ model: Team }],
      });
      res.status(200).json(leagueData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  model.export = router;