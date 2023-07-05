const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Create a new SQLite database instance
const db = new sqlite3.Database('/Users/dullasiphone/delaydollar/data/userinputs.db', (err) => {
  if (err) {
    console.error('Failed to connect to the SQLite database:', err.message);
    process.exit(1);
  }
  console.log('Connected to the SQLite database.');
});

// Middleware to parse JSON data
app.use(express.json());

// Enable CORS
app.use(cors());

// Route to handle user registration
app.post('/register', (req, res) => {
  const userData = req.body;
  const { fullName, ticketNumber, flightNumber, contact } = userData;

  const insertQuery = `INSERT INTO users (fullName, ticketNumber, flightNumber, contact) VALUES (?, ?, ?, ?)`;
  const values = [fullName, ticketNumber, flightNumber, contact];

  db.run(insertQuery, values, function (err) {
    if (err) {
      console.error('Failed to register user:', err.message);
      res.status(500).json({ error: 'Failed to register user' });
    } else {
      console.log('User registered successfully:', this.lastID);
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

// Route for the root endpoint
app.get('/', (req, res) => {
  console.log('GET request received on root endpoint');
  res.send('Hello, server is running!');
});

// Route for the /register GET request
app.get('/register', (req, res) => {
  res.send('GET request received on /register');
});

app.listen(port, 'delaydollarscorp.com', () => {
  console.log(`Server is running on port ${port}`);
});

