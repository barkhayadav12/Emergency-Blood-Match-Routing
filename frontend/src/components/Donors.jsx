import { Box, Button, TextField, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Donors = () => {
  const [showForm, setShowForm] = useState(false);
  const [donors, setDonors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    bloodGroup: '',
    phone: '',
    email: ''
  });

  const fetchDonors = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/donors');
      setDonors(res.data.donors);
    } catch (error) {
      console.error('Error fetching donors', error);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donors', formData);
      setFormData({ name: '', address: '', bloodGroup: '', phone: '', email: '' });
      setShowForm(false);
      fetchDonors();
    } catch (error) {
      console.error('Error adding donor', error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="contained" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Donor'}
      </Button>

      {showForm && (
        <Paper sx={{ p: 3, mt: 2 }}>
          <Typography variant="h6" gutterBottom>Add Donor</Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Address" name="address" value={formData.address} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Email" name="email" value={formData.email} onChange={handleChange} />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
          </form>
        </Paper>
      )}

      {/* Table showing donors */}
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              <TableCell><b>Blood Group</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
              <TableCell><b>Email</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donors.map((donor) => (
              <TableRow key={donor._id}>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.address}</TableCell>
                <TableCell>{donor.bloodGroup}</TableCell>
                <TableCell>{donor.phone}</TableCell>
                <TableCell>{donor.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Donors;
