const jwt = require('jsonwebtoken');

// Middleware to verify access token
const verifyAccessToken = (req, res, next) => {
  const accessToken = req.headers.authorization?.split(' ')[1];

  if (!accessToken) {
    return res.status(401).json({ message: 'Access token not provided' });
  }

  jwt.verify(accessToken, 'your-access-token-secret', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid access token' });
    }
    req.user = { userId: decoded.userId };
    next();
  });
};

// Middleware to verify refresh token
const verifyRefreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not provided' });
  }

  jwt.verify(refreshToken, 'your-refresh-token-secret', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }
    req.user = { userId: decoded.userId };
    next();
  });
};

module.exports = { verifyAccessToken, verifyRefreshToken };
