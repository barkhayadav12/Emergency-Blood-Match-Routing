import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      console.log(res.data);
      onLogin();
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 5, width: 300 }}>
      <Typography variant="h5" gutterBottom align="center">
        Admin Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
