const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  players: [
    {
      name: String,
      points: Number,
      rebounds: Number,
      assists: Number,
    },
  ],
});

module.exports = mongoose.model('Team', teamSchema);const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  players: [
    {
      name: String,
      points: Number,
      rebounds: Number,
      assists: Number,
    },
  ],
});

module.exports = mongoose.model('Team', teamSchema);