const {Schema, model} = require('mongoose');

const SaleDetailSchema = new Schema ({
  id_saleDetail: {type: Number, required: true},
  id_sale: {type: Number, required: true},
  id_product: {type: Number, required: true},
  quantity: {type: Number, required: true},
  price: {type: Number, required: false},
})

module.exports = model('SaleDetail', SaleDetailSchema)