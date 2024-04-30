const express = require('express');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to extract IP address from request headers
app.use(requestIp.mw());

app.use(cors({
    origin: 'http://localhost:5173'
  }));

// Endpoint to get the visitor's country code based on their IP
app.get('/country', (req, res) => {
    try {
      // Get the visitor's IP address from the request headers
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

      // Use geoip-lite to look up the country information based on the IP address
      const geo = geoip.lookup(ip);
      const countryCode = geo ? geo.country : null;

      // Send the country code back to the client
      if (countryCode) {
        res.json({ countryCode });
      } else {
        res.status(500).json({ error: 'Unable to determine country code' });
      }
    } catch (error) {
      console.error('Error getting country code:', error);
      res.status(500).json({ error: 'An internal server error occurred' });
    }
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
