const router = require("express").Router();
// const { Team, League } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const gameData = await League.findAll();
      res.status(200).json(gameData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/:match_id", async (req, res) => {
    try {
      const gameData = await Team.findByPk(req.params.match_id,)
      if (!gameData) {
        res.status(404).json({ message: "Matcj found with that id" });
        return;
      }
      res.status(200).json(gameData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  model.export = router;