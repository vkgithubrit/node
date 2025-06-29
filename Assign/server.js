const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: Logging each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route 1: Root
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route 2: About
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Route 3: Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
