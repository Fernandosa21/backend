const Router = require('express');
const router = Router();

const Product = require('../models/Product')

//GET
router.get('/', async (req, res) => {
  try{
    const products = await Product.find()
    res.json({success:true, products})
  }
  catch(err){
    res.json({success:true})
  }
})

//POST
router.post('/', async (req, res) => {
  // const {} = req.body;
  try{
    const newProduct = new Product({})
    await newProduct.save();
    res.json({success:true})
  }
  catch(err){
    res.json({success:false, err})
  }
})

//PUT Product.update

//DELETE

router.delete('/', async (req, res) => {
  try{
    res.json({success:true})
  }
  catch(err){
    res.json({success:false, err})
  }
})

module.exports = router;