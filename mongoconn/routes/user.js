const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      id,
      Username,
      SurvivalTime,
      Kills,
      Deaths,
      Damage,
      AnimalsReleased,
      XP,
      Headshots,
      ConnectionTime,
      TotalMatches,
      Inventory,
    } = req.body;
    const newUser = new User({
      id,
      Username,
      SurvivalTime,
      Kills,
      Deaths,
      Damage,
      AnimalsReleased,
      XP,
      Headshots,
      ConnectionTime,
      TotalMatches,
      Inventory,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create user or Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
