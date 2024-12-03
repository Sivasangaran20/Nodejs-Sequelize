const { DataTypes } = require("sequelize");
const seq = require("../config/database");

const Post = seq.define("Post", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Post;
