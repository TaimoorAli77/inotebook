const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    const obj ={
        name:"Hamza",
        Number: 02
    }
    res.json(obj);
});


module.exports=router;