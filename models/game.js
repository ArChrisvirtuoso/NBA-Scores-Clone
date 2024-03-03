const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  date: Date,
  homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  awayTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  homeTeamScore: Number,
  awayTeamScore: Number,
});

module.exports = mongoose.model('Game', gameSchema);const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  date: Date,
  homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  awayTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  homeTeamScore: Number,
  awayTeamScore: Number,
});

module.exports = mongoose.model('Game', gameSchema);