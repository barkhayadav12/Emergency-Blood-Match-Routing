import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Donors from './components/Donors';
import Hospitals from './components/Hospitals';
import DeliveryPartners from './components/DeliveryPartners';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/delivery-partners" element={<DeliveryPartners />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
