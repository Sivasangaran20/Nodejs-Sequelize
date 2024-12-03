const Sequelize = require("sequelize");

const seq = new Sequelize({
  database: "sequel-node",
  username: "postgres",
  password: "welcome123",
  host: "localhost",
  dialect: "postgres",
});

seq
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

const User = seq.define("Customer", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: { type: Sequelize.STRING, unique: true },
});

seq
  .sync()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

User.create({
  firstName: "Siva",
  lastName: "M",
  email: "mss@gmail.com",
})
  .then(() => console.log("created"))
  .catch((err) => console.log("err", err));
