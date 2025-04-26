const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const donorRoutes = require('./routes/donors');
const authRoutes = require('./routes/auth');
const hospitalRoutes = require('./routes/hospitals');
const deliveryPartnerRoutes = require('./routes/deliveryPartners');

app.use('/api/donors', donorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/delivery-partners', deliveryPartnerRoutes);

// Database Connection
mongoose.connect('your_mongodb_url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' MongoDB connected successfully');
  app.listen(5000, () => console.log(' Server running on http://localhost:5000'));
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
