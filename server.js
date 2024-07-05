const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Helper function to get client IP
const getClientIp = (req) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  return ip.includes('::') ? '127.0.0.1' : ip; // For simplicity, treating "::1" as "127.0.0.1"
};

app.get('/', (req, res) => {
  res.send('hello there!');
}

app.get('/api/hello', (req, res) => {
  const visitorName = req.query.visitor_name || 'Guest';
  const clientIp = getClientIp(req);
  const location = 'New York';
  const temperature = 11;

  const response = {
    client_ip: clientIp,
    location: location,
    greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response, null, 2)); // Use JSON.stringify with indentation
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
