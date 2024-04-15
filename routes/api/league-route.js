const router = require("express").Router();
const { Teams, League } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const leagueData = await League.findAll({
      include: [{ model: Teams }],
    });
    res.status(200).json(leagueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
