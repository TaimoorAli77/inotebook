const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    const obj ={
        name:"Taimoor",
        Number: 01
    }
    res.json(obj);
});


module.exports=router;