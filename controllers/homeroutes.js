const router = require("express").Router();
const { Match, Team, League, TeamMatch, User } = require("../models");

router.get("/", (req, res) => {
  try {
    // if (req.session.logged_in) {
    //   res.redirect("/dashboard");
    //   console.log(`Hit the if statement`);
    //   return;
    // }

    res.render("signIn");
    console.log(`Hit the login`);
  } catch (err) {
    res.status(500).json({ message: `Hit the error` });
  }
});

router.get("/teams", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
