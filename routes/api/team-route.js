const router = require("express").Router();
const { Team, Match } = require("../../models");

router.get("/:team_name", async (req, res) => {
    try {
      const teamData = await Team.findByPk(req.params.team_name, {
        include: [{ model: Match }],
      });
      if (!teamData) {
        res.status(404).json({ message: "Team found with that team name" });
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
  
  router.put("/:team_name", async (req, res) => {
    try {
      const teamData = await Category.update(req.body, {
        where: {
          id: req.params.team_name,
        },
      });
      if (!teamData[0]) {
        res.status(404).json({ message: "No Team with this team name!" });
        return;
      }
      res.status(200).json(teamData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:team_name", async (req, res) => {
  try {
    const teamData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!teamData) {
      res.status(404).json({ message: "No team with this name!" });
      return;
    }
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

model.exports = router;