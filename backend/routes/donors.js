const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// Add Donor
router.post('/', async (req, res) => {
  const { name, address, bloodGroup, phone, email } = req.body;

  if (!name || !address || !bloodGroup || !phone || !email) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newDonor = new Donor({ name, address, bloodGroup, phone, email });
    await newDonor.save();
    res.status(201).json({ success: true, donor: newDonor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all Donors
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json({ success: true, donors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

