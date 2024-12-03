const express = require("express");
const {
  createUser,
  updateUser,
  getUser,
  getAllUser,
  deleteUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.get("/user/:id", getUser);
router.get("/users", getAllUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
