import { Box, Button, TextField, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newHospital, setNewHospital] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    const res = await axios.get('http://localhost:5000/api/hospitals');
    setHospitals(res.data);
  };

  const handleChange = (e) => {
    setNewHospital({ ...newHospital, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/hospitals', newHospital);
    setNewHospital({ name: '', address: '', phone: '', email: '' });
    setShowForm(false);
    fetchHospitals();
  };

  return (
    <Box p={3}>
      <Button variant="contained" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Hospital'}
      </Button>

      {showForm && (
        <Paper sx={{ p: 3, mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" value={newHospital.name} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Address" name="address" value={newHospital.address} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Phone" name="phone" value={newHospital.phone} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Email" name="email" value={newHospital.email} onChange={handleChange} fullWidth margin="normal" />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Submit</Button>
          </form>
        </Paper>
      )}

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hospitals.map((hospital) => (
              <TableRow key={hospital._id}>
                <TableCell>{hospital.name}</TableCell>
                <TableCell>{hospital.address}</TableCell>
                <TableCell>{hospital.phone}</TableCell>
                <TableCell>{hospital.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Hospitals;
