const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  Items: {
    shard: { type: Number, default: 0 },
    potion: { type: Number, default: 0 },
    orb: { type: Number, default: 0 },
    gem: { type: Number, default: 0 },
  },
});

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  Username: { type: String, required: true },
  SurvivalTime: { type: Number, required: true },
  Kills: { type: Number, required: true },
  Deaths: { type: Number, required: true },
  Damage: { type: Number, required: true },
  AnimalsReleased: { type: Number, required: true },
  XP: { type: Number, required: true },
  Headshots: { type: Number, required: true },
  ConnectionTime: { type: Date, required: true },
  TotalMatches: { type: Number, required: true },
  Inventory: { type: inventorySchema, required: true },
},
{
  collection: "hi",
});

mongoose.model("hi",userSchema);


