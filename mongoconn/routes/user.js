const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

//GET all the users from the db
router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Get user specified in the url with id
router.get("/getusersbyid/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.send("Error " + err);
  }
});

//Create user according to the schema in the db
router.post("/create", async (req, res) => {
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

//Delete user based on the id
router.delete("/delete/:id", async (req, res) => {
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

//Update the user schema based on the id
router.patch("/update/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const update = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, update, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
