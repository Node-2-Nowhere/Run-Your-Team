const router = require("express").Router();
const { Match, Team, League } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const gameData = await Match.findAll();
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:match_id", async (req, res) => {
  try {
    const gameData = await Match.findByPk(req.params.match_id);
    if (!gameData) {
      res.status(404).json({ message: "Match found with that id" });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  Match.create(req.body)
    .then((match) => {
      if (req.body.teamid.length) {
        const matchTeamIdArr = req.body.teamid.map((team_id) => {
          return {
            match_id: match.id,
            team_id,
          };
        });
        return Result.bulkCreate(matchTeamIdArr);
      }
      res.status(200).json(match);
    })
    .then((matchIds) => res.status(200).json(matchIds))
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
