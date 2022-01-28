const express = require('express')
const router = express.Router();
router.get('/',(req,res)=>{
    res.render('home')
  })
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('*',(req,res)=>{
    res.render("Error Page")
})

module.exports=router;