const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nba-scores', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set up body-parser and static files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Define the routes
app.get('/', (req, res) => {
  res.render('index');
});

//  To fetch the data and pass it to handlebars

app.get('/', async (req, res) => {
  const today = new Date();
  const games = await Game.find({ date: { $gte: today } }).populate('homeTeam awayTeam');

  res.render('index', { games });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});