const Router = require('express');
const router = Router();

const Sale = require('../models/Sale')

//GET
router.get('/', async (req, res) => {
  try{
    const sales = await Sale.find()
    res.json({success:true, sales})
  }
  catch(err){
    res.json({success:true})
  }
})

//POST
router.post('/', async (req, res) => {
  const {
    amount,
    pay_method,
    card,
    user_name,
    transfer_key,
  } = req.body;
  try{
    const newSale = new Sale({
      amount,
      pay_method,
      card,
      user_name,
      transfer_key,
    })
    console.log(newSale)
    await newSale.save();
    res.json({success:true})
  }
  catch(err){
    res.json({success:false, err})
  }
})

//PUT Sale.update

//DELETE

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try{
    const sale = await Sale.findByIdAndDelete(id);
    res.json({success:true})
  }
  catch(err){
    res.json({success:false, err})
  }
})

module.exports = router;