const seq = require("../config/database");
const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;
    const user = await User.create(req.body);
    const age = await user.getAge();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName } = req.body;
    const user = await User.findByPk(userId);
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      await user.save();
      const userResponse = user.toJSON();
      delete userResponse.password;
      res.status(200).json(userResponse);
    } else {
      res.status(404).json({ msg: "User Not Found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    // const users = await User.findAll();
    const users = await seq.query("SELECT * FROM users;", {
      type: seq.QueryTypes.SELECT,
    });
    console.log("akdijwienj");
    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (user) res.status(201).json(user);
    else res.status(404).json({ msg: "User Not Found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    await user.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { createUser, getAllUser, getUser, updateUser, deleteUser };
