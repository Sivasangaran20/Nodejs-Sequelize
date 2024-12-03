const seq = require("./../config/database");
const Post = require("./post");
const User = require("./user");

User.hasMany(Post);
Post.belongsTo(User);

async function connectDb() {
  await seq
    .sync({ alter: true })
    .then(() => {
      console.log("tables are synchronized");
    })
    .catch((err) => {
      console.log("error", err);
    });
}

module.exports = connectDb;
