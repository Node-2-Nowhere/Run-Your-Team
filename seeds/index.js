const sequelize = require("../config/connection");
const seedMatch = require("./match-seeds");
const seedLeague = require("./league-seeds");
const seedTeam = require("./team-seeds");
const seedResults = require("./result-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLeague();

  await seedTeam();

  await seedMatch();

  await seedResults();

  process.exit(0);
};

seedAll();
