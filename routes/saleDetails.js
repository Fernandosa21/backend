const Router = require('express');
const router = Router();

const SaleDetail = require('../models/SaleDetail')

//GET
router.get('/', async (req, res) => {
  try{
    const saleDetails = await SaleDetail.find()
    res.json({success:true, saleDetails})
  }
  catch(err){
    res.json({success:true})
  }
})

//POST
router.post('/', async (req, res) => {
  // const {} = req.body;
  try{
    const newSaleDetail = new SaleDetail({})
    await newSaleDetail.save();
    res.json({success:true})
  }
  catch(err){
    res.json({success:false, err})
  }
})

//PUT SaleDetail.update

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