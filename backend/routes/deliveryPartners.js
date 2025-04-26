const express = require('express');
const router = express.Router();
const DeliveryPartner = require('../models/DeliveryPartner');

// Add new delivery partner
router.post('/', async (req, res) => {
  try {
    const deliveryPartner = new DeliveryPartner(req.body);
    await deliveryPartner.save();
    res.status(201).json(deliveryPartner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all delivery partners
router.get('/', async (req, res) => {
  try {
    const deliveryPartners = await DeliveryPartner.find();
    res.json(deliveryPartners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
