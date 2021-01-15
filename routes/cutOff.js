const Router = require('express');
const router = Router();

const CutOff = require('../models/CutOff')

//GET
router.get('/', async (req, res) => {
  try{
    const cutOffs = await CutOff.find()
    res.json({success:true, cutOffs})
  }
  catch(err){
    res.json({success:true})
  }
})

//POST
router.post('/', async (req, res) => {
  // const {} = req.body;
  try{
    const newCutOff = new CutOff({})
    await newCutOff.save();
    res.json({success:true})
  }
  catch(err){
    res.json({success:false, err})
  }
})

//PUT CutOff.update

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