const sequelize = require("../config/connection");
const seedGame = require("./game-seeds");
const seedLeague = require("./league-seeds");
const seedTeam = require("./team-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGame();

  await seedLeague();

  await seedTeam();

  process.exit(0);
};

seedAll();
