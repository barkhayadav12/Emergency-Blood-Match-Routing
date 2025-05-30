const mongoose = require('mongoose');

const deliveryPartnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('DeliveryPartner', deliveryPartnerSchema);
