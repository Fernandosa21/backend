const {Schema, model} = require('mongoose');

const SaleSchema = new Schema ({
  id_sale: {type: Number, required: true},
  id_cutoff: {type: Number, required: true},
  amount: {type: Number, required: true},
  pay_method: {type: String, required: true},
  card: {type: String, required: false},
  user_name: {type: String, required: true},
  date: {type: Date, default: Date.now},
  transfer_key: {type: String, required: false},
})

module.exports = model('Sale', SaleSchema)