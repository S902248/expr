// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route: GET /home → HTML Response
app.get('/home', (req, res) => {
  res.status(200).send('<h1>Welcome to Home Page</h1>');
});

// Route: GET /aboutus → JSON Response
app.get('/aboutus', (req, res) => {
  res.status(200).json({ message: 'Welcome to About Us' });
});

// Route: GET /contactus → Dummy contact details
app.get('/contactus', (req, res) => {
  res.status(200).json({
    phone: '123-456-7890',
    email: 'contact@example.com',
    address: '123, Express Street, Node City',
  });
});

// Handle undefined routes → 404
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
