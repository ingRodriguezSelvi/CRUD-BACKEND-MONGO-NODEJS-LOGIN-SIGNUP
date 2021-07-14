const router =require('express').Router();

router.get('/signIn',(req,res)=>{
    res.send('Sig In');
})
router.get  ('/signUp',(req,res)=>{
    res.send('Register');
})

module.exports=router;