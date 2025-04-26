import { Box, Typography, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Dummy data
  const data = [
    { name: 'Donors', value: 120 },
    { name: 'Hospitals', value: 50 },
    { name: 'Delivery Partners', value: 30 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={4}>
        {/* Bar Chart */}
        <Paper elevation={3} sx={{ p: 2, flex: 1, minWidth: 300 }}>
          <Typography variant="h6" gutterBottom>
            Overview (Bar Chart)
          </Typography>
          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </Paper>

        {/* Pie Chart */}
        <Paper elevation={3} sx={{ p: 2, flex: 1, minWidth: 300 }}>
          <Typography variant="h6" gutterBottom>
            Distribution (Pie Chart)
          </Typography>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
