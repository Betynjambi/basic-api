const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name || 'Guest';
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    try {
        // Simulated location and weather data for demonstration
        const city = 'New York';
        const temperature = 11;

        res.json({
            client_ip: clientIp,
            location: city,
            greeting: `Hello, ${visitorName}! The temperature is ${temperature} degrees Celsius in ${city}.`
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
