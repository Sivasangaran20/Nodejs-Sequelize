const Sequelize = require("sequelize");

const seq = new Sequelize({
  database: "sequel-node",
  username: "root",
  password: "welcome123",
  host: "localhost",
  dialect: "mysql",
});

seq
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

module.exports = seq;
