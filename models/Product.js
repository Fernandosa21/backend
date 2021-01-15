const {Schema, model} = require('mongoose');

const ProductSchema = new Schema ({
  id_product: {type: Number, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
})

module.exports = model('Product', ProductSchema)