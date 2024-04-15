const router = require("express").Router();
const sequelize = require("sequelize");
const { Team, Match, Results } = require("../../models");

// router.get("/", async (req, res) => {
//   try {
//     const teamData = await Team.findAll();
//     res.status(200).json(teamData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
//I  done think we need this route

router.get("/:team_name", async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.team_name, {
      include: [{ model: Results }, {model, Match}],
      attributes: {
        include: [
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              "(SELECT SUM(home_win), SUM(away_win) FROM results WHERE result = result.match_id)"
            ),
            "gameWins",
          ],
          [
            sequelize.literal(
              "(SELECT COUNT(match_id) FROM results WHERE result = result.match_id"
            ),
            "gamesPlayed",
          ],
        ],
      },
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
    const teamData = await Team.create(req.body);
    res.status(200).json(teamData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:team_name", async (req, res) => {
  try {
    const teamData = await Team.update(req.body, {
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
    const teamData = await Team.destroy({
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

module.exports = router;
