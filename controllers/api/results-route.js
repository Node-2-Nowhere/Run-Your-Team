const router = require("express").Router();
const { Results } = require("../../models");

// Get all results
router.get("/", async (req, res) => {
  try {
    const gameData = await Results.findAll();
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post game results
router.post("/", async (req, res) => {
  try {
    const gameData = await Results.create(req.body);
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update specific game results
router.put("/:match_id", async (req, res) => {
  try {
    const gameData = await Results.update(req.body, {
      where: {
        id: req.params.match_id,
      },
    });
    if (!gameData[0]) {
      res.status(404).json({ message: `No match with this id!` });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
