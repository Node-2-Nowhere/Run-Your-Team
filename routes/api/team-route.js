const router = require("express").Router();
const { Team, Match } = require("../../models");

router.get("/:id", async (req, res) => {
    try {
      const teamData = await Team.findByPk(req.params.id, {
        include: [{ model: Match }],
      });
      if (!teamData) {
        res.status(404).json({ message: "Team found with that id" });
        return;
      }
      res.status(200).json(teamData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const teamData = await Category.create(req.body);
      res.status(200).json(teamData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const teamData = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!teamData[0]) {
        res.status(404).json({ message: "No Team with this id!" });
        return;
      }
      res.status(200).json(teamData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {
  try {
    const teamData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!teamData) {
      res.status(404).json({ message: "No team with this id!" });
      return;
    }
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

model.exports = router;