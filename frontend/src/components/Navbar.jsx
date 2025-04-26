import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo/Title */}
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ fontWeight: 'bold', letterSpacing: 1 }}
        >
          Vital Route
        </Typography>

        {/* Optional Future Section: Profile, Logout, etc. */}
        <Box>
          {/* Future: Add an Admin Avatar or Logout Button here */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
