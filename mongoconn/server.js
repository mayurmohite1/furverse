const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = 3001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
app.use(express.json());
const userRouter = require("./routes/user");
app.use("/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



/*
require("./models/userSchema");
const User = mongoose.model("User");
const demo = new User({
  id: "mayur",
  Username: "mayur",
  SurvivalTime: 48.11,
  Kills: 20,
  Deaths: 1,
  Damage: 3580,
  AnimalsReleased: 0,
  XP: 170,
  Headshots: 13,
  ConnectionTime: new Date("11/05/2024 7:18:38 PM"),
  TotalMatches: 1,
  Inventory: {
    Items: {
      shard: 2,
      potion: 4,
      orb: 0,
      gem: 0,
    },
  },
});

demo
  .save()
  .then(() => {
    console.log(demo);
  })
  .catch((error) => {
    console.error("Error saving user document:", error);
  });
*/
