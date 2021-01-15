const {Schema, model} = require('mongoose');

const CutOffSchema = new Schema ({
  id_cutoff: {type: Number, required: true},
  oppened_hour: {type: Date, default: Date.now},
  closed_hour: {type: Date, required: false},
  user_name: {type: String, required: true},
  initial_amount: {type: Number, required: false},
  income: {type: Number, required: false},
  total_income: {type: Number, required: false},
  transactions_quantity: {type: Number, required: false},
  canceled_quantity: {type: Number, required: false},
})

module.exports = model('CutOff', CutOffSchema)