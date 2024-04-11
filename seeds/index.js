const sequelize = require("../config/connection");
const seedMatch = require("./match-seeds");
const seedLeague = require("./league-seeds");
const seedTeam = require("./team-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMatch();

  await seedLeague();

  await seedTeam();

  process.exit(0);
};

seedAll();
