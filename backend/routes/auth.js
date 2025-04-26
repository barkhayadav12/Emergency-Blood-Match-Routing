// backend/routes/auth.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', username);
  if (username === 'admin' && password === 'admin') {
    res.json({ success: true, token: 'dummy_token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;
