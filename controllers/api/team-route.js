const router = require("express").Router();
const sequelize = require("sequelize");
const { Team, Match, TeamMatch } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/:team_id", withAuth, async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.team_id, {
      include: [{ model: Match, through: TeamMatch }],
      plain: true,
    });
    let gameWins = 0;
    for (const match of teamData.matches) {
      if (match.winner === teamData.id) {
        gameWins++;
      }
    }
    console.log(teamData);

    const fullTeamData = {
      id: teamData.id,
      team_name: teamData.team_name,
      league_id: teamData.league_id,
      match_count: teamData.matches.length,
      gameWins: gameWins,
    };
    if (teamData) {
      res.status(200).json(fullTeamData);
    }
    if (!teamData) {
      res.status(404).json({ message: "No Team found with that team id" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const teamData = await Team.create(req.body);
    res.status(200).json(teamData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:team_name", withAuth, async (req, res) => {
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

router.delete("/:team_name", withAuth, async (req, res) => {
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
