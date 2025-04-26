import { Box, Button, TextField, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DeliveryPartners = () => {
  const [deliveryPartners, setDeliveryPartners] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newDeliveryPartner, setNewDeliveryPartner] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    fetchDeliveryPartners();
  }, []);

  const fetchDeliveryPartners = async () => {
    const res = await axios.get('http://localhost:5000/api/delivery-partners');
    setDeliveryPartners(res.data);
  };

  const handleChange = (e) => {
    setNewDeliveryPartner({ ...newDeliveryPartner, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/delivery-partners', newDeliveryPartner);
    setNewDeliveryPartner({ name: '', address: '', phone: '', email: '' });
    setShowForm(false);
    fetchDeliveryPartners();
  };

  return (
    <Box p={3}>
      <Button variant="contained" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Delivery Partner'}
      </Button>

      {showForm && (
        <Paper sx={{ p: 3, mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" value={newDeliveryPartner.name} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Address" name="address" value={newDeliveryPartner.address} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Phone" name="phone" value={newDeliveryPartner.phone} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Email" name="email" value={newDeliveryPartner.email} onChange={handleChange} fullWidth margin="normal" />
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
            {deliveryPartners.map((partner) => (
              <TableRow key={partner._id}>
                <TableCell>{partner.name}</TableCell>
                <TableCell>{partner.address}</TableCell>
                <TableCell>{partner.phone}</TableCell>
                <TableCell>{partner.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DeliveryPartners;
