const router = require("express").Router();
const sequelize = require("sequelize");
const { Team, Match } = require("../../models");

// router.get("/", async (req, res) => {
//   try {
//     const teamData = await Team.findAll();
//     res.status(200).json(teamData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
//I  done think we need this route

router.get("/:team_id", async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.team_id, {
      include: [{ model: Match }],
      // attributes: {
      //   include: [
      //     [
      //       // Use plain SQL to add up the total mileage
      //       sequelize.literal(
      //         "(SELECT SUM(win), FROM result WHERE result.team_id = result.team_id)"
      //       ),
      //       "gameWins",
      //     ],
      //     [
      //       sequelize.literal(
      //         "(SELECT COUNT(match_id) FROM result WHERE match.match_id = match.match_id"
      //       ),
      //       "gamesPlayed",
      //     ],
      //   ],
      // },
    });

    //const gameWins = teamData how many times in teamdata.team_match how many time does match.winner = teamData.id

    // Need to cycle through array for matching values
    // let gameWins = 0;

    // teamData.forEach((match) => {
    //   if (match.winner === teamData.id) {
    //     // Addup how many times values matched
    //     gameWins++;
    //   }
    // console.log(gameWins);
    // Return as total wins
    // });

    if (!teamData) {
      res.status(404).json({ message: "Team found with that team id" });
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
