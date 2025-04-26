const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
