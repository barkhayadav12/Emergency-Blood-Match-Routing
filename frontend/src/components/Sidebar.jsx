import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Home, LocalHospital, VolunteerActivism, LocalShipping } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { text: 'Hospitals', icon: <LocalHospital />, path: '/hospitals' },
    { text: 'Donors', icon: <VolunteerActivism />, path: '/donors' },
    { text: 'Delivery Partners', icon: <LocalShipping />, path: '/delivery-partners' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#f5f7fa',
          borderRight: '1px solid #ddd',
        },
      }}
    >
      {/* Push sidebar content down below the Navbar */}
      <Toolbar />

      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
              mx: 1,
              borderRadius: 1,
            }}
          >
            <ListItemIcon sx={{ color: '#555' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
