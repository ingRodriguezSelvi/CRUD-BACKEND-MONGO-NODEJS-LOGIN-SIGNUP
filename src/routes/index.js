const router =require('express').Router();

router.get('/',(req,res)=>{
    res.send('Index');
})
router.get('/about',(req,res)=>{
    res.send("This is About");
})
module.exports=router;