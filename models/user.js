const { DataTypes } = require("sequelize");
const seq = require("../config/database");

// const User = seq.define("User", {
//   id: {
//     allowNull: false,
//     primaryKey: true,
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//   },
//   firstName: { type: DataTypes.STRING, allowNull: false },
//   lastName: { type: DataTypes.STRING, allowNull: true },
//   email: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false,
//     validate: { isEmail: true },
//   },
//   password: { type: DataTypes.STRING, allowNull: false },
//   age: { type: DataTypes.INTEGER, allowNull: true },
// });

const User = seq.define("User", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
      len: [3, 10],
    },
  },
  lastName: { type: DataTypes.STRING, allowNull: true },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
    set(value) {
      this.setDataValue("email", value.toLowerCase());
    },
  },
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      const firstName = this.getDataValue("firstName");
      const lastName = this.getDataValue("lastName");
      return `${firstName} ${lastName}`;
    },
  },
  birthDate: { type: DataTypes.DATE, allowNull: true },
});

User.prototype.getAge = async function () {
  const birth = await this.getDataValue("birthDate");
  if (!birth) return null;
  const today = new Date();

  const age = today.getFullYear() - birth.getFullYear();
  return age;
};

module.exports = User;
