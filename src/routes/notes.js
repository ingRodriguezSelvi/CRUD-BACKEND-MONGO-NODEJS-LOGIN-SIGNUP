const router =require('express').Router();
const Note =require('../models/Note.js');

router.get('/notes',(req,res)=>{
    res.send('Notes');
})

router.post('/notes/new-note',async(req,res)=>{ //Add Note
   const {title,description}=req.body;
   const err=[];
   if(!title){
       err.push({tex:'Please Write a Tittle'})
   }
   else if(!description){
       err.push({text:'Please Write a Description'})
   }
   if(err.length>0){
       res.send('Ha ocurrido un error');
   }else{
    const newNote=new Note({title,description});
    await newNote.save();
    res.send('ok')
   }   
})
router.get('/notes/listNote',async(req,res)=>{ //View Notes 
    res.send(await Note.find());
})

module.exports=router;